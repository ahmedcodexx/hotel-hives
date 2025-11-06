import supabase, { supabaseUrl } from "./supabase";

export const signUpFunc = async ({email, password, fullName}) => {
    let {  data, error } = await supabase.auth.signUp({email, password, options: {
        data: {
            fullName,
            avatar: '',
        }
    }});

    if(error) throw new Error(error);

    return data
}

export const login = async ({email, password}) => {
    let {  data, error } = await supabase.auth.signInWithPassword({email, password})

    if(error) throw new Error(error)

    return data
}

export const getCurrentUser = async ()=> {
    const {data: session} = await supabase.auth.getSession();
    if(!session.session) return null
    
    const {data, error} = await supabase.auth.getUser()

    if(error) throw new Error(error)

    return data?.user

}


export const LogOutFunc = async () => {
    let { error } = await supabase.auth.signOut();

    if(error) throw new Error(error);

}

export const updateCurrentUser = async ({fullName, password, avatar})=> {
    let userData;
    if(password) userData = {password}
    if(fullName) userData = {data: {fullName}}
    
    const {data, error} = await supabase.auth.updateUser(userData);
    if(error) throw new Error(error);

    const isNewAvatar = avatar && typeof avatar !== "string";
    if (!isNewAvatar) return data;


    const imageAvatar = `avatar-${Math.random() * 9}-${avatar?.[0]?.name}`;
    const {error: storageError} = await supabase.storage.from('avatars').upload(imageAvatar, avatar?.[0])
    if(storageError) throw new Error(storageError);

    const {data: updateUser, error: errorUpdate} = await supabase.auth.updateUser({data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${imageAvatar}`
    }})
    if(errorUpdate) throw new Error(errorUpdate);

    return updateUser
}
