import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "./index";

const Layout = () => {
  return (
    <div className="grid h-dvh grid-cols-12 grid-rows-12 space-x-1">
      <Header />
      <Sidebar />
      <main className="row-start-2 row-span-full col-start-3 col-span-full bg-[var(--color-secondary)] p-10 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
