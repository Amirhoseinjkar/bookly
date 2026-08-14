import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";

function BookCard({ book }) {
  return (
    <Link to={`/book-details/${book.key}`} className="group block w-35 shrink-0">
      <article className="flex h-[320px] flex-col overflow-hidden rounded-md border border-[#E8DCCF] bg-[#FFF9F2] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB38A] hover:shadow-lg">

        {/* Cover */}
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#E8DCCF]">

          <img
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
          />

          {/* Rating */}
          {book.ratings_average && (
            <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-[#332B26]/90 px-2 py-1 text-xs text-[#FFF7E8]">
              <IoStar className="text-[#FFB45C]" />
              {book.ratings_average.toFixed(1)}
            </div>
          )}

        </div>

        {/* Information */}
        <div className="flex min-h-0 flex-1 flex-col px-3 py-2.5">

          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[#332B26] transition-colors group-hover:text-[#9B5E3C]">
            {book.title}
          </h3>

          <p className="mt-auto truncate text-xs text-[#806F63]">
            {book.author_name?.[0] || "Unknown author"}
          </p>

        </div>

      </article>
    </Link>
  );
}

export default BookCard;