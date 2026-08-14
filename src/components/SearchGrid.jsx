import BookCard from "./BookCard";

function SearchGrid({ books }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center bg-[#ece1d38e] rounded-2xl p-4">
      {books.map((book) => (
        <div key={book.key} className="flex justify-center">
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}

export default SearchGrid;