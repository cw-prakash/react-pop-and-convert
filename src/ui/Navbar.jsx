import logo from "../logo.svg";
import { Icon, Link } from "../components";

import { Link as RouterLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const navLinks = [
  { url: "#", icon: "globe" },
  { url: "#", icon: "youtube" },
  { url: "#", icon: "headphone" },
  { url: "#", icon: "note" },
  { url: "#", icon: "mic" },
];

export default function () {
  return (
    <nav className="py-6 shadow-md">
      <div className="flex justify-between px-8">
        <RouterLink to="/">
          <img src={logo} />
        </RouterLink>
        <ul className="flex gap-3">
          {navLinks.map(({ url, icon, index }) => (
            <li
              key={index}
              className="flex h-11 w-11 rounded-full border-gray-200 border-solid border justify-center items-center hover:border-blue-500 hover:text-blue-500"
            >
              <a href={url}>
                <Icon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
