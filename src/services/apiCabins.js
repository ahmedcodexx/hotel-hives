import supabase, { supabaseUrl } from './supabase'

const getCabins = async () => {
    const { data, error } = await supabase.from('cabin').select('*')
    if (error) throw new Error("Failed to load Cabins")
    return data
}

export default getCabins

export const createCabinFnc = async (newCabin) => {
    const imageName = newCabin.image?.[0]
    const imageURL = await uploadImage(imageName)

    const { data, error } = await supabase.from('cabin').insert([{ ...newCabin, image: imageURL }])
    if (error) throw new Error('Failed to create cabin');
    return data

}


export const editCabinFnc = async(newCabin, id)=> {
    let imageURL = newCabin.image;

     //  جلب الصورة القديمة من قاعدة البيانات
    const { data: oldCabin } = await supabase.from("cabin").select("image").eq("id", id).single();

    if (!newCabin.image?.startsWith?.(supabaseUrl)) {
        const imageFile = newCabin.image?.[0];
        imageURL = await uploadImage(imageFile);
    }

      //  نحذف الصورة القديمة بعد نجاح رفع الجديدة
    if (oldCabin?.image) {
        const oldImageName = oldCabin.image.split("/").pop();
        await supabase.storage.from("cabin-images").remove([oldImageName]);
    }

    const {data, error} = await supabase.from('cabin').update({ ...newCabin, image: imageURL }).eq("id", id)
    if (error) throw new Error('Failed to update cabin');
    return data
}

export const deleteCabinFnc = async (id) => {
    const { data, error } = await supabase.from('cabin').delete().eq("id", id)
    if (error) {
        throw new Error("Failed to delete Cabins")
    }
    return data
}


async function uploadImage(imageFile) {
    if (!imageFile) throw new Error("Image file missing");

    const imageName = `${Date.now()}-${imageFile.name.replaceAll("/", "")}`;
    const imageURL = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    const { error: storageError } = await supabase.storage.from("cabin-images").upload(imageName, imageFile);

    if (storageError) {
        throw new Error("Cabin image upload failed — entry rolled back.");
    }

    return imageURL;
}