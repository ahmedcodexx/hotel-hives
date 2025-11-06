import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { useCreateCabin, useModal, useUpdateCabin } from "../../hooks";


const CreateCabin = ({ cabinData = {} }) => {
    const { closeModal } = useModal();

    const { createCabin, isCreatingCabin } = useCreateCabin();
    const { editCabin, isEditingCabin } = useUpdateCabin();
    const isActions = isCreatingCabin || isEditingCabin;

    const { id: editId, ...cabinValues } = cabinData || {};
    const isEditing = Boolean(editId);

    const { register, handleSubmit, reset, watch, formState } = useForm({
        defaultValues: isEditing ? cabinValues : {},
    });

    const regularPrice = Number(watch("regularPrice"));
    const { errors } = formState;

    const onSubmit = (data) => {
        if (isEditing) {
            editCabin(
                { newCabinData: { ...data }, id: editId },
                {
                    onSuccess: () => {
                        reset();
                        closeModal();
                    },
                },
            );
        } else {
            createCabin(data, {
                onSuccess: () => {
                    reset();
                    closeModal();
                },
            });
        }
    };

    return (
        <form
            className={`w-3/4 ${isActions ? "cursor-not-allowed" : ""} relative shadow-2xl`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <button
                type="button"
                className="absolute top-5 right-5 cursor-pointer text-[var(--color-text)]"
                onClick={closeModal}
            >
                <FaXmark />
            </button>
            <div className="m-auto space-y-5 rounded-sm border-1 border-[var(--color-primary)] bg-[var(--color-primary)] p-10">
                <div className="dev-input">
                    <label className="text-[var(--color-text)]" htmlFor="name">Name</label>
                    <input
                        className="input"
                        type="text"
                        id="name"
                        {...register("name")}
                        required
                    />
                </div>
                <div className="dev-input">
                    <label className="text-[var(--color-text)]" htmlFor="maxCapacity">Max Capacity</label>
                    <input
                        className="input"
                        type="text"
                        id="maxCapacity"
                        {...register("maxCapacity")}
                        required
                    />
                </div>
                <div className="dev-input">
                    <label className="text-[var(--color-text)]" htmlFor="regularPrice">Regular Price</label>
                    <input
                        className="input"
                        type="number"
                        id="regularPrice"
                        {...register("regularPrice")}
                        required
                    />
                </div>
                <div className="dev-input relative">
                    <label className="text-[var(--color-text)]" htmlFor="discount">Discount</label>
                    <input
                    defaultValue={0}
                        className="input"
                        type="number"
                        id="discount"
                        {...register("discount", {
                            validate: (value) =>
                                value <= regularPrice ||
                                "The discount must be less than regular price",
                        })}
                    />
                    {errors?.discount?.message && (
                        <p className="absolute top-10 right-0 text-xs text-red-700">
                            {errors.discount.message}
                        </p>
                    )}
                </div>
                <div className="dev-input">
                    <label className="text-[var(--color-text)]" htmlFor="description">Description for website</label>
                    <textarea
                        className="input"
                        name="description"
                        id="description"
                        {...register("description")}
                        required
                    ></textarea>
                </div>
                <div className="dev-input">
                    <label className="text-[var(--color-text)]" htmlFor="image">Cabin Image</label>
                    <input
                        className="file-input"
                        type="file"
                        id="image"
                        {...register("image")}
                        required={!isEditing}
                    />
                </div>
                <div className="dev-input justify-center">
                    <input
                            onClick={closeModal}
                            className="mx-3 cursor-pointer rounded-md bg-gray-300 px-2 py-3"
                            type="reset"
                            value="Cancel"
                        />
                    <input
                        disabled={isActions}
                        className={`rounded-md ${isActions ? "cursor-not-allowed" : "cursor-pointer"} mx-3 bg-indigo-700 px-2 py-3 text-white`}
                        type="submit"
                        value={`${isEditing ? "Edit Cabin" : "Add Cabin"}`}
                    />
                </div>
            </div>
        </form>
    );
};

export default CreateCabin;
