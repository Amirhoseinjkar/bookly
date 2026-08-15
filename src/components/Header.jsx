import { useState } from "react";
import logo from "../assets/logo.jpeg";
import searchh from "../assets/search.png";
import user from "../assets/user.png";
import { NavLink, useNavigate } from "react-router";

function Header() {
  const [search,setSearch]=useState('')
  let navigate = useNavigate()
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/popular-all" },
    { name: "Categories", path: "/categories" },
    { name: "My Books", path: "/my-books" },
  ];

  return (
    <header className="w-full border-b border-[#E8DCCF] bg-[#FDF6EC]">
      {/* Main header row */}
      <div className="flex h-16 items-center justify-between px-5">
        <NavLink to="/" className="h-11 w-32">
          <img
            src={logo}
            alt="Bookly"
            className="h-full w-full object-contain"
          />
        </NavLink>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-[#9B5E3C] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#FFB38A]"
                    : "text-[#66574D] hover:text-[#9B5E3C]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Search + profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-40 items-center rounded-full border border-[#6B5041] bg-[#332B26] px-3 transition-all duration-200 focus-within:border-[#FFB38A] sm:w-52">
            <input
              type="text"
              placeholder="Search books..."
              onChange={(e)=>{ setSearch(e.target.value)}}
              className="w-full bg-transparent text-sm text-[#FFF7E8] outline-none placeholder:text-[#B9A89B]"
            />

            <button onClick={()=> navigate(`/search?query=${search}`)}>
              <img src={searchh} alt="Search" className="h-4 w-4 opacity-80 " />
            </button>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8C8BA] transition hover:border-[#FFB38A] hover:bg-[#FFF0E1]">
            <img src={user} alt="Profile" className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav className="flex overflow-x-auto border-t border-[#E8DCCF] px-5 md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative shrink-0 px-4 py-3 text-sm transition-colors ${
                isActive
                  ? "font-medium text-[#9B5E3C] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#FFB38A]"
                  : "text-[#66574D] hover:text-[#9B5E3C]"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
