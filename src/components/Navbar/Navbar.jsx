import { Link, NavLink } from "react-router-dom";
import './../../../src/index.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/ContextProvider";

const Navbar = () => {

  const {user} = useContext(AuthContext)

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/listed-books"}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/write-a-review"}>Write a Review</NavLink>
      </li>
    </>
  );

  return (
    <nav className=" py-2 mb-5 sticky top-0 z-10 text-[#131313CC] bg-white shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 text-lg font-normal"
            >
              {links}
              <li>
                <Link to='/signup' className="btn text-white bg-[#59C6D2] lg:text-lg ">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <Link
           to={'/'} className="btn btn-ghost md:text-[28px] text-2xl font-bold text-[#131313]">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 text-base font-normal">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4  font-semibold">
          <p>{user?.email}</p>
          <Link to={'/signin'} className="btn text-white bg-[#23BE0A] lg:text-lg">
            Sign In
          </Link>
          <Link to={'signup'} className="hidden xl:flex btn text-white bg-[#59C6D2] lg:text-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
