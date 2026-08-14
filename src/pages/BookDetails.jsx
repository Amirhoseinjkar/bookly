import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import { IoArrowBack, IoStar } from "react-icons/io5";
import { FiBookOpen, FiCalendar, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [books, setBooks] = useState(null);
  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    async function gettingData() {
      const response = await fetch(
        `https://openlibrary.org/works/${id}.json`
      );

      const data = await response.json();
      console.log(data);
      setBooks(data);

      const ratingResponse = await fetch(
        `https://openlibrary.org/works/${id}/ratings.json`
      );

      const ratingData = await ratingResponse.json();
      setRatings(ratingData.summary);
      console.log(ratingData);
    }

    gettingData();
  }, [id]);

  if (!books) {
    return (
      <>
        <Header />

        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#FDF6EC]">
          <p className="text-[#806F63]">Loading book...</p>
        </main>
      </>
    );
  }

  const description =
    typeof books.description === "string"
      ? books.description
      : books.description?.value;

  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-64px)] bg-[#FDF6EC] px-5 py-8 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-6xl">

          {/* Back */}
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#806F63] transition-colors hover:text-[#9B5E3C]"
          >
            <IoArrowBack />
            Back
          </Link>

          {/* Main book section */}
          <section className="grid gap-8 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] lg:gap-12">

            {/* Cover */}
            <div className="mx-auto w-[220px] sm:w-[240px] md:w-full">
              {books.covers?.[0] ? (
                <img
                  draggable={false}
                  className="w-full rounded-lg object-cover shadow-xl"
                  src={`https://covers.openlibrary.org/b/id/${books.covers[0]}-L.jpg`}
                  alt={books.title}
                />
              ) : (
                <div className="flex aspect-[2/3] items-center justify-center rounded-lg bg-[#E8DCCF] text-center text-[#806F63]">
                  No cover available
                </div>
              )}
            </div>

            {/* Information */}
            <div className="flex flex-col justify-center">

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B07A5A]">
                Book details
              </p>

              <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-[#332B26] sm:text-5xl lg:text-6xl">
                {books.title}
              </h1>

              {/* Rating */}
              {ratings?.average && (
                <div className="mt-5 flex items-center gap-2">
                  <IoStar className="text-xl text-[#E89B45]" />

                  <span className="text-lg font-semibold text-[#332B26]">
                    {ratings.average.toFixed(1)}
                  </span>

                  {ratings.count && (
                    <span className="text-sm text-[#806F63]">
                      · {ratings.count.toLocaleString()} ratings
                    </span>
                  )}
                </div>
              )}

              {/* Info pills */}
              <div className="mt-6 flex flex-wrap gap-3">

                {books.first_publish_date && (
                  <div className="flex items-center gap-2 rounded-full bg-[#FFF0E1] px-4 py-2 text-sm text-[#79533E]">
                    <FiCalendar />
                    {books.first_publish_date}
                  </div>
                )}

                {books.subjects?.length > 0 && (
                  <div className="flex items-center gap-2 rounded-full bg-[#FFF0E1] px-4 py-2 text-sm text-[#79533E]">
                    <FiBookOpen />
                    {books.subjects.length} subjects
                  </div>
                )}

                <div className="flex items-center gap-2 rounded-full bg-[#FFF0E1] px-4 py-2 text-sm text-[#79533E]">
                  <FiGlobe />
                  Open Library
                </div>

              </div>

              {/* Description */}
              {description && (
                <div className="mt-9 max-w-3xl">
                  <h2 className="font-serif text-2xl font-semibold text-[#332B26]">
                    About this book
                  </h2>

                  <p className="mt-3 text-[15px] leading-7 text-[#66574D]">
                    {description}
                  </p>
                </div>
              )}

              {/* Subjects */}
              {books.subjects?.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-serif text-2xl font-semibold text-[#332B26]">
                    Subjects
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {books.subjects.slice(0, 10).map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-[#E8DCCF] bg-[#FFF9F2] px-3 py-1.5 text-sm text-[#806F63]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>

          {/* More information */}
          <section className="mt-12 rounded-2xl border border-[#E8DCCF] bg-[#FFF9F2] p-6 shadow-sm sm:p-8">

            <h2 className="font-serif text-2xl font-semibold text-[#332B26]">
              More information
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-xl bg-[#FDF6EC] p-5">
                <p className="text-sm text-[#806F63]">
                  First published
                </p>

                <p className="mt-2 text-lg font-semibold text-[#332B26]">
                  {books.first_publish_date || "Unknown"}
                </p>
              </div>

              <div className="rounded-xl bg-[#FDF6EC] p-5">
                <p className="text-sm text-[#806F63]">
                  Ratings
                </p>

                <p className="mt-2 text-lg font-semibold text-[#332B26]">
                  {ratings?.count
                    ? ratings.count.toLocaleString()
                    : "Unknown"}
                </p>
              </div>

              <div className="rounded-xl bg-[#FDF6EC] p-5">
                <p className="text-sm text-[#806F63]">
                  Average rating
                </p>

                <p className="mt-2 flex items-center gap-1 text-lg font-semibold text-[#332B26]">
                  <IoStar className="text-[#E89B45]" />
                  {ratings?.average
                    ? ratings.average.toFixed(1)
                    : "N/A"}
                </p>
              </div>

              <div className="rounded-xl bg-[#FDF6EC] p-5">
                <p className="text-sm text-[#806F63]">
                  Subjects
                </p>

                <p className="mt-2 text-lg font-semibold text-[#332B26]">
                  {books.subjects?.length || 0}
                </p>
              </div>

            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default BookDetails;