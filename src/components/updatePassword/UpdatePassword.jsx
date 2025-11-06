import useUpdateUser from "../../hooks/auth/useUpdateUser";
import { useForm } from "react-hook-form";

const UpdatePassword = () => {
    const { updateUser, isUpdating } = useUpdateUser();
    const { register, handleSubmit, reset, formState, getValues } = useForm();
    const { errors } = formState;

    const onSubmit = (data) => {
        updateUser(data,
            {
                onSuccess: () => {
                    reset();
                },
            },
        );
    };
    return (
        <div>
            <h1 className="my-5 pt-5 text-2xl font-semibold text-[var(--color-text)]">Update your Password</h1>
            <div className="mt-5 rounded-md bg-[var(--color-primary)] py-10 shadow-2xl">
                <form
                    className="m-auto w-2/4 space-y-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex-between">
                        <label htmlFor="passwordConfirm" className="w-80 text-[var(--color-text)]">
                            Password
                        </label>
                        <input
                            {...register("password")}
                            id="password"
                            type="password"
                            required
                            className="input w-full"
                        />
                    </div>
                    <div className="flex-between">
                        <label htmlFor="password" className="w-80 text-[var(--color-text)]">
                            Password Confirmation
                        </label>
                        <input
                            {...register("passwordConfirm", {
                                validate: (value) =>
                                    value === getValues().password ||
                                    "Passwords don't match. Please try again.",
                            })}
                            id="passwordConfirm"
                            name="passwordConfirm"
                            type="password"
                            required
                            className="input w-full"
                        />
                        {errors?.passwordConfirm?.message && (
                            <p className="text-end text-xs text-red-700">
                                {errors?.passwordConfirm?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex-end gap-4">
                        <input
                            type="reset"
                            value="Cancel"
                            className="cursor-pointer rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300"
                        />
                        <input
                            type="submit"
                            value="Update"
                            className={`rounded-md bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 ${isUpdating ? "cursor-not-allowed" : "cursor-pointer"}`}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;
