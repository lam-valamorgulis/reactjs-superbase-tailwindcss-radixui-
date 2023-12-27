import { NavLink } from "react-router-dom";
import { NAVBAR } from "../helper/utils";

function NavBar() {
  return (
    <nav>
      <ul className="flex flex-col">
        {NAVBAR.map((nav) => (
          <li key={nav.label} className="p-3">
            <NavLink
              className="px-3 py-2 flex flex-row gap-x-5 items-center
              hover:bg-zinc-100 
              hover:transition-all 
              hover:rounded-lg 
              duration-300"
              to={nav.link}
            >
              {nav.icon}
              <span>{nav.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
