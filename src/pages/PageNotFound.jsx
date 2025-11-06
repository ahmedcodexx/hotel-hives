const PageNotFound = () => {
  return (
    <main className="h-full flex-center">
      <div className="mx-auto">
        <div className="mx-auto max-w-lg text-gray-600">
          <div className="space-y-5 text-center">
            <h3 className="font-semibold text-indigo-600">404 Error</h3>
            <p className="text-5xl font-semibold text-[var(--color-text)]">
              Page not found
            </p>
            <p>
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
