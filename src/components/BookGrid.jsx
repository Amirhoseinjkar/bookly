import BookCard from "./BookCard";
import { useRef } from "react";
import "./bookGrid.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


function BookGrid({ books }) {
  const scrollRef = useRef(null);

  function scrollLeft() {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth * 0.6,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth * 0.6,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative mt-4 h-[340px]">

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-[5] h-full w-14 bg-gradient-to-r from-[#FDF6EC] to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-14 bg-gradient-to-l from-[#FDF6EC] to-transparent" />

      {/* Left button */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E8DCCF] bg-[#FFF9F2]/95 text-xl leading-none text-[#66574D] shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-[#FFB38A] hover:bg-[#FFB38A] hover:text-[#332B26] hover:shadow-lg"
      >
      <FaAngleLeft />

      </button>

      {/* Books */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex h-full w-full gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-12 py-2"
      >
        {books.map((book) => (
          <div
            key={book.key}
            className="shrink-0 snap-start"
          >
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E8DCCF] bg-[#FFF9F2]/95 text-xl leading-none text-[#66574D] shadow-md backdrop-blur-sm transition-all duration-200 hover:translate-x-0.5 hover:border-[#FFB38A] hover:bg-[#FFB38A] hover:text-[#332B26] hover:shadow-lg"
      >
        
        <FaAngleRight />
      </button>

    </div>
  );
}

export default BookGrid;