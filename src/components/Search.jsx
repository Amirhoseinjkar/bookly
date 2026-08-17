import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { searchBooks } from "../api";
import SearchGrid from "../components/SearchGrid";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.trim() === "") {
      setBooks([]);
      return;
    }

    async function getBooks() {
      setLoading(true);

      try {
        const results = await searchBooks(query);
        setBooks(results);
      } catch (error) {
        console.error(error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    getBooks();
  }, [query]);

  if (!query) {
    return (
      <main className="min-h-[calc(100vh-64px)] bg-[#FDF6EC] px-5 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-semibold text-[#332B26]">
            Search for a book
          </h1>

          <p className="mt-3 text-[#806F63]">
            Use the search bar above to find your next read.
          </p>
        </div>
      </main>
    );
  }

  return (
  <>
  
    <main className="min-h-[calc(100vh-64px)] bg-[#FDF6EC] px-5 py-8">
      <div className="mx-auto max-w-7xl">
        <button onClick={()=>window.history.back() } className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#B07A5A] hover:text-[#F58448] rounded-md px-3 py-1 transition-colors duration-200">
        
          <span>←</span> Go back
        </button>
        <div className="mb-7">
          <p className="text-sm font-medium uppercase tracking-wider text-[#B07A5A]">
            Search results
          </p>

          <h1 className="mt-1 text-3xl font-semibold text-[#332B26]">
            Results for "{query}"
          </h1>

          {!loading && books.length > 0 && (
            <p className="mt-2 text-sm text-[#806F63]">
              Found {books.length} books
            </p>
          )}
        </div>

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-[#806F63]">Searching for books...</p>
          </div>
        )}

        {!loading && books.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center rounded-xl border border-[#E8DCCF] bg-[#FFF9F2]">
            <div className="text-center">
              <h2 className="text-xl font-medium text-[#332B26]">
                No books found
              </h2>

              <p className="mt-2 text-sm text-[#806F63]">
                Try searching for a different title or author.
              </p>
            </div>
          </div>
        )}

        {!loading && books.length > 0 && (
          <SearchGrid books={books} />
        )}
      </div>
    </main>
    </>
  );
}

export default Search;