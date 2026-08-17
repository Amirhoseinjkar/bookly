import { useState } from "react";
import logo from "../assets/logo.jpeg";
import user from "../assets/user.png";
import { NavLink, useNavigate } from "react-router";
import { IoMdSearch } from "react-icons/io";


function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/popular-all" },
    { name: "Categories", path: "/categories" },
    { name: "My Books", path: "/my-books" },
  ];

  function handleSearch() {
    if (search.trim() === "") return;

    navigate(`/search?query=${encodeURIComponent(search.trim())}`);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8DCCF] bg-[#FDF6EC]/95 backdrop-blur-md">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Top row */}
        <div className="flex h-16 items-center justify-between gap-5">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex h-10 w-28 shrink-0 items-center sm:w-32"
          >
            <img
              src={logo}
              alt="Bookly"
              className="h-full w-full object-contain"
            />
          </NavLink>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "font-medium text-[#9B5E3C] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#FFB38A]"
                      : "text-[#66574D] hover:text-[#9B5E3C]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Search + profile */}
          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:flex-none">

            <div className="flex h-9 min-w-0 w-full max-w-[230px] items-center rounded-full border border-[#DCCDBF] bg-[#FFF9F2] px-3 transition-all duration-200 focus-within:border-[#C88B68] focus-within:bg-white focus-within:shadow-sm">

              <input
                type="text"
                value={search}
                placeholder="Search books..."
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="min-w-0 flex-1 bg-transparent text-sm text-[#332B26] outline-none placeholder:text-[#A18F82]"
              />

              <button
                onClick={handleSearch}
                aria-label="Search"
                className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition hover:bg-[#FDEBD9]"
              >
                <IoMdSearch />

              </button>
            </div>

            <button
              aria-label="Profile"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8C8BA] bg-[#FFF9F2] transition-all hover:border-[#FFB38A] hover:bg-[#FFF0E1]"
            >
              <img
                src={user}
                alt=""
                className="h-4 w-4 opacity-75"
              />
            </button>

          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="flex overflow-x-auto border-t border-[#E8DCCF] lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative shrink-0 px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? "font-medium text-[#9B5E3C] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-[#FFB38A]"
                    : "text-[#66574D] hover:text-[#9B5E3C]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Header;