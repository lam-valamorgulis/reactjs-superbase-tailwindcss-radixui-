import { NavLink } from "react-router-dom";
import { NAVBAR } from "../helper/utils";

function NavBar() {
  return (
    <nav>
      <ul className="flex flex-col">
        {NAVBAR.map((nav) => (
          <li key={nav.label} className="p- hover:bg-zinc-100 round-sm">
            <NavLink
              to={nav.link}
              className="flex flex-row items-center text-lg pt-4"
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
