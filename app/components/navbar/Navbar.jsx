import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import HomeIcon from "./icons/HomeIcon";
import MenuIcon from "./icons/MenuIcon";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MenuIcon />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/users">Users</Link>
              </li>
              <li>
                <Link href="/form">Add User</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost hidden lg:flex">
            <HomeIcon />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link href="/users" className="btn btn-accent btn-outline">
                Users
              </Link>
            </li>
            <li>
              <Link href="/form" className="btn btn-accent btn-outline">
                Add User
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ToggleTheme />
        </div>
      </div>
    </>
  );
}
