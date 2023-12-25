import { NavLink } from "react-router-dom";
import { NAVBAR } from "../helper/utils";

function NavBar() {
  return (
    <nav>
      <ul className="flex flex-col">
        {NAVBAR.map((nav) => (
          <li
            key={nav.label}
            className="p-3 
            "
          >
            <NavLink
              className="flex flex-row gap-x-5 items-center
              hover:bg-zinc-50 
              hover:transition-all 
              hover:rounded-lg 
              hover:text-stone-950
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
