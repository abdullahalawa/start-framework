import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav
        className={`nav ${style.nav} bg-main border-gray-200 dark:bg-gray-900 relative z-10`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h2 className="text-3xl text-white font-bold">START FRAMEWORK</h2>
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className={`${style.li}`}>
                <NavLink
                  to="/about"
                  className="navLink block py-2 px-3 text-white rounded md:border-0  md:py-2 md:px-4 uppercase"
                >
                  About
                </NavLink>
              </li>

              <li className={`${style.li}`}>
                <NavLink
                  to="/portfolio"
                  className="block py-2 px-3 text-white rounded md:border-0  md:py-2 md:px-4 uppercase"
                >
                  Portfolio
                </NavLink>
              </li>

              <li className={`${style.li}`}>
                <NavLink
                  to="/contact"
                  className="block py-2 px-3 text-white rounded md:border-0  md:py-2 md:px-4 uppercase"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
