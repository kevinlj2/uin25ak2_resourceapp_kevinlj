import { NavLink } from "react-router";
import { resources } from "../js/ressurser.js";
import "../styles/nav.scss";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>
              <NavLink to={`/${resource.category}`} className="navLink">
                {resource.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
