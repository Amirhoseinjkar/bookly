import { Link } from "react-router-dom";
import {
  IoBookOutline,
  IoHeartOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#E8DCCF] bg-[#F8EDE0]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFB38A] text-[#332B26]">
                <IoBookOutline className="text-xl" />
              </div>

              <span className="font-serif text-2xl font-semibold text-[#332B26]">
                Bookly
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#806F63]">
              A little place for stories worth remembering. Discover new
              books, explore different worlds, and keep your reading life
              organized.
            </p>

            <Link
              to="/categories"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#A65F3F] transition hover:text-[#7F4932]"
            >
              Explore books
              <IoArrowForwardOutline className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-[#332B26]">
              Explore
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              <Link
                to="/"
                className="text-sm text-[#806F63] transition hover:text-[#A65F3F]"
              >
                Home
              </Link>

              <Link
                to="/categories"
                className="text-sm text-[#806F63] transition hover:text-[#A65F3F]"
              >
                Categories
              </Link>

              <Link
                to="/browse"
                className="text-sm text-[#806F63] transition hover:text-[#A65F3F]"
              >
                Browse
              </Link>

              <Link
                to="/search"
                className="text-sm text-[#806F63] transition hover:text-[#A65F3F]"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Library */}
          <div>
            <h3 className="text-sm font-semibold text-[#332B26]">
              Your library
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              <Link
                to="/my-books"
                className="text-sm text-[#806F63] transition hover:text-[#A65F3F]"
              >
                My Books
              </Link>

              <span className="text-sm text-[#9A887B]">
                Want to read
              </span>

              <span className="text-sm text-[#9A887B]">
                Have read
              </span>

              <span className="text-sm text-[#9A887B]">
                Reading list
              </span>
            </div>
          </div>

        </div>

        {/* Quote / divider */}
        <div className="my-8 border-t border-[#E4D5C6]" />

        <div className="flex flex-col gap-3 text-xs text-[#9A887B] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bookly
          </p>

          <p className="flex items-center gap-1">
            Made for people who always have
            <span className="font-medium text-[#806F63]">
              one more book
            </span>
            to read.
            <IoHeartOutline className="ml-1 text-[#C87958]" />
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;