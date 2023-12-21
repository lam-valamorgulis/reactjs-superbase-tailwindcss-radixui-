import Logo from "./Logo";
import NavBar from "./NavBar";

function SideBar() {
  return (
    <div className="flex flex-col gap-y-8">
      <Logo />
      <NavBar />
    </div>
  );
}

export default SideBar;
