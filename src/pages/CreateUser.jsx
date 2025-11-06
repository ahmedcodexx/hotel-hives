import { useForm } from "react-hook-form";
import useSignUp from "../hooks/auth/useSignUp";

const CreateUser = () => {
  const {signUp, isPending} = useSignUp()
  const {register, handleSubmit, getValues, formState, rest} = useForm();
  const {errors} = formState

  const onSignUp = (data)=> {
    signUp(data, {onSettled: rest})
  } 

  return (
    <section className="">
      <div className="m-auto flex-center flex-col rounded-xl bg-[var(--color-primary)] border-1 border-[var(--color-secondary)]">
        <form className="w-2/4 py-10 space-y-6 " onSubmit={handleSubmit(onSignUp)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-[var(--color-text)]"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
              {...register('fullName')}
                id="name"
                name="fullName"
                type="text"
                required
                className="input w-full"
              />
            {errors?.fullName?.message && <p className="text-xs text-red-700 text-end">{errors?.fullName?.message}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-[var(--color-text)]"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
              {...register('email', {pattern: {value: /\S+@\S+\.\S+/, message: 'Please provide email address'} })}
                id="email"
                name="email"
                type="email"
                required
                className="input w-full"
              />
              {errors?.email?.message && <p className="text-xs text-red-700 text-end">{errors?.email?.message}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-[var(--color-text)]"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                minLength={8}
                required
                className="input w-full"
              />
              {errors?.password?.message && <p className="text-xs text-red-700 text-end">{errors?.password?.message}</p>}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-[var(--color-text)]"
              >
                Password Confirmation
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register('passwordConfirm', {validate: (value) => value === getValues().password || "Passwords don't match. Please try again.", })}
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                required
                className="input w-full"
              />
              {errors?.passwordConfirm?.message && <p className="text-xs text-red-700 text-end">{errors?.passwordConfirm?.message}</p>}
            </div>
          </div>
          <div className="pt-1 flex-end gap-4">
            <input
              type="reset"
              value='Cancel '
              className='px-3 py-2 cursor-pointer rounded-md bg-gray-200 hover:bg-gray-300'
            />
            <input
              type="submit"
              value='Create'
              className={`px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer ${isPending && 'cursor-not-allowed'}`}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateUser;
