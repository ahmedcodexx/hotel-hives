import { useForm } from "react-hook-form";
import { useUser } from "../hooks";
import useUpdateUser from "../hooks/auth/useUpdateUser";
import { UpdatePassword } from "../components";

const UserProfile = () => {
  const { updateUser, isUpdating } = useUpdateUser();
  const { user } = useUser();
  const { fullName, email, avatar } = user.user_metadata;
  const { register, handleSubmit, reset } = useForm();


  const onSubmit = (data) => {
    if (!data.fullName) return;
    const avatarFile =
      data.avatar && data.avatar.length > 0 ? data.avatar : avatar;
    updateUser(
      { ...data, avatar: avatarFile },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };
  return (
    <section>
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Update your account</h1>
      <div className="mt-5 rounded-md bg-[var(--color-primary)] py-10 shadow-2xl">
        <form
          className="m-auto w-2/4 space-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-between">
            <label className="w-30 text-[var(--color-text)]" htmlFor="email">
              Your email
            </label>
            <input
              className="input w-full cursor-not-allowed"
              value={email}
              type="text"
              id="email"
              disabled
            />
          </div>
          <div className="flex-between">
            <label className="w-30 text-[var(--color-text)]" htmlFor="name">
              Full name
            </label>
            <input
              className="input w-full"
              defaultValue={fullName}
              type="text"
              id="name"
              {...register("fullName")}
            />
          </div>
          <div className="flex-between">
            <label className="w-30 text-[var(--color-text)]" htmlFor="avatar">
              Avatar image
            </label>
            <input
              className="file-input w-full"
              type="file"
              id="avatar"
              {...register("avatar")}
            />
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
      <UpdatePassword />
    </section>
  );
};

export default UserProfile;
