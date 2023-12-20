import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-xl m-auto flex flex-row">
      <aside className="bg-green-100 w-60 ">
        <SideBar />
      </aside>
      <main className="bg-yellow-100 flex-1">
        <header className="flex-1">
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
