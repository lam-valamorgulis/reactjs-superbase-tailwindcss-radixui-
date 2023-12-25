import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="min-h-screen max-w-screen-xxl m-auto flex flex-row">
      <aside className="w-96 p-8 border-r-2">
        <SideBar />
      </aside>
      <main className="bg-yellow-100 flex-1">
        <header className="flex-1 bg-red-100">
          <Header />
        </header>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
