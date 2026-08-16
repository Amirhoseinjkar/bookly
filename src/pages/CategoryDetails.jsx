import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { someCategories } from "../api";
import SearchGrid from "../components/SearchGrid";
import { IoArrowBack } from "react-icons/io5";

function CategoryDetails() {
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const result = await someCategories(id);

      const transformed = result.works.map((work) => ({
        key: work.key,
        title: work.title,
        cover_i: work.cover_id,
        author_name: work.authors?.map((a) => a.name),
      }));

      setBooks(transformed);
    }

    getData();
  }, [id]);

  console.log(books);

  const categoryName = id
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#FDF6EC] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Back button */}
        <Link
          to="/categories"
          className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#806F63] transition-all hover:bg-[#FFF3E8] hover:text-[#A65F3F]"
        >
          <IoArrowBack className="text-lg transition-transform group-hover:-translate-x-1" />
          Back to categories
        </Link>

        {/* Heading */}
        <div className="mb-8 mt-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B07A5A]">
            Browse the shelves
          </p>

          <div className="mt-2 flex items-center gap-3">
            <h1 className="font-serif text-4xl font-semibold capitalize text-[#332B26] sm:text-5xl">
              {categoryName}
            </h1>

            <div className="mt-2 h-2 w-2 rounded-full bg-[#FFB38A]" />
          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#806F63] sm:text-base">
            Explore our collection of {categoryName.toLowerCase()} books and
            find your next story.
          </p>

          <div className="mt-4 h-[2px] w-14 rounded-full bg-[#FFB38A]" />
        </div>

        {/* Books */}
        {books.length > 0 ? (
          <SearchGrid books={books} />
        ) : (
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-[#DCCDBF] bg-[#FFF9F2]">
            <p className="text-sm text-[#806F63]">
              Looking for books...
            </p>
          </div>
        )}

      </div>
    </main>
  );
}

export default CategoryDetails;