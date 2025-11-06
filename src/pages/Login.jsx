import { useForm } from "react-hook-form";
import useLogin from "../hooks/auth/useLogin";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login, isPending } = useLogin();

    const onLogin = (loginData)=> {
      login(loginData)
    }

  return (
    <section className="h-dvh content-center bg-[var(--color-secondary)]">
      <div className="mx-auto flex-center w-3/4 flex-col rounded-xl border-1 bg-[var(--color-primary)] border-[var(--color-secondary)] px-6 py-5 sm:w-2/3 md:w-1/2 lg:w-1/3 lg:px-8">
        <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-[var(--color-text)]">
          Log in to your account
        </h2>
        <form className="mt-10 w-full space-y-6" onSubmit={handleSubmit(onLogin)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-[var(--color-text)]"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                required
                className="input w-full"
              />
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
                required
                className="input w-full"
              />
            </div>
          </div>
          <div className="flex-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="pb-0.5 text-[var(--color-text)]">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </a>
          </div>
          <div className="pt-1">
            <button
              type="submit"
              className={`flex-center w-full ${isPending ? 'cursor-not-allowed' : 'cursor-pointer'} bg-indigo-700  hover:bg-indigo-700  rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs`}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
