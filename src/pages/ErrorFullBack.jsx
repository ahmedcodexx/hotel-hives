

const ErrorFullBack = ({error, resetErrorBoundary}) => {

  return (
    <section className=" h-dvh flex-center flex-col gap-5">
      <h1 className="text-5xl font-semibold">Something went wrong!</h1>
      <p>{error?.message}</p>
      <button type="button" onClick={resetErrorBoundary} className="bg-indigo-700 cursor-pointer text-white py-3 px-4 rounded-md">Try again</button>
    </section>
  )
}

export default ErrorFullBack