import { useState } from "react";
import SearchGrid from "../components/SearchGrid";
import { IoBookOutline, IoBookmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function MyBooks() {
  const {user} = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState("readNext");

  const [haveRead, setHaveread] = useState(() => {
    const response = localStorage.getItem("haveRead");
    const data = response ? JSON.parse(response) : null;
    return data;
  });

  const [readNext, setReadNext] = useState(() => {
    const response = localStorage.getItem("readNext");
    const data = response ? JSON.parse(response) : null;
    return data;
  });

  const activeBooks = activeTab === "readNext" ? readNext : haveRead;

  return (
     <>
     {user? 
      <div className="min-h-screen bg-[#FDF6EC]">

      <main className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B07A5A]">
              Your library
            </p>

            <h1 className="mt-1 font-serif text-4xl font-semibold text-[#332B26] sm:text-5xl">
              My Books
            </h1>

            <p className="mt-2 max-w-lg text-sm leading-6 text-[#806F63]">
              Keep track of the books you've finished and the stories waiting
              for you.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-9 flex w-full max-w-lg rounded-xl border border-[#E8DCCF] bg-[#FFF9F2] p-1.5 shadow-sm">

            <button
              onClick={() => setActiveTab("readNext")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                activeTab === "readNext"
                  ? "bg-[#FFB38A] text-[#332B26] shadow-sm"
                  : "text-[#806F63] hover:bg-[#FDF0E3]"
              }`}
            >
              <IoBookmarkOutline className="text-lg" />

              Want to read

              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  activeTab === "readNext"
                    ? "bg-[#FFF3E8] text-[#9B5E3C]"
                    : "bg-[#F1E7DC] text-[#806F63]"
                }`}
              >
                {readNext?.length || 0}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("haveRead")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                activeTab === "haveRead"
                  ? "bg-[#FFB38A] text-[#332B26] shadow-sm"
                  : "text-[#806F63] hover:bg-[#FDF0E3]"
              }`}
            >
              <IoBookOutline className="text-lg" />

              Have read

              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  activeTab === "haveRead"
                    ? "bg-[#FFF3E8] text-[#9B5E3C]"
                    : "bg-[#F1E7DC] text-[#806F63]"
                }`}
              >
                {haveRead?.length || 0}
              </span>
            </button>

          </div>

          {/* Section heading */}
          <div className="mb-5">
            <h2 className="font-serif text-2xl font-semibold text-[#332B26]">
              {activeTab === "readNext"
                ? "Books I want to read"
                : "Books I've read"}
            </h2>

            <div className="mt-2 h-[2px] w-14 rounded-full bg-[#FFB38A]" />
          </div>

          {/* Books */}
          {activeBooks ? (
            activeBooks.length > 0 ? (
              <SearchGrid books={activeBooks} />
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#DCCDBF] bg-[#FFF9F2] px-6 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDEBD9] text-[#B07A5A]">
                  {activeTab === "readNext" ? (
                    <IoBookmarkOutline className="text-3xl" />
                  ) : (
                    <IoBookOutline className="text-3xl" />
                  )}
                </div>

                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#332B26]">
                  {activeTab === "readNext"
                    ? "Your reading list is empty"
                    : "No finished books yet"}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[#806F63]">
                  {activeTab === "readNext"
                    ? "Find a book that catches your eye and add it to your reading list."
                    : "When you finish a book, mark it as read and it will appear here."}
                </p>

                <Link
                  to="/browse"
                  className="mt-6 rounded-full bg-[#FFB38A] px-5 py-2.5 text-sm font-medium text-[#332B26] transition-all hover:bg-[#FCA878] hover:shadow-md"
                >
                  Browse books
                </Link>

              </div>
            )
          ) : (
            <div className="flex min-h-[320px] items-center justify-center">
              <p className="text-sm text-[#806F63]">
                You haven't added any books yet.
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
      : 
      
<div className="min-h-screen bg-[#FDF6EC] flex items-center justify-center px-5">
  <div className="w-full max-w-md rounded-2xl border border-[#E8DCCF] bg-[#FFF9F2] p-8 text-center shadow-sm">

    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FDEBD9] text-[#B07A5A]">
      <IoBookOutline className="text-3xl" />
    </div>

    <h1 className="mt-6 font-serif text-3xl font-semibold text-[#332B26]">
      Your library is waiting
    </h1>

    <p className="mt-3 text-sm leading-6 text-[#806F63]">
      Sign in to keep track of the books you want to read and the stories
      you've already finished.
    </p>

    <div className="mt-6 flex justify-center gap-3">
      <Link
        to="/login"
        className="rounded-full bg-[#FFB38A] px-6 py-2.5 text-sm font-medium text-[#332B26] transition-all hover:bg-[#FCA878] hover:shadow-md"
      >
        Log in
      </Link>

      <Link
        to="/register"
        className="rounded-full border border-[#DCCDBF] bg-[#FFF9F2] px-6 py-2.5 text-sm font-medium text-[#806F63] transition-all hover:bg-[#FDF0E3]"
      >
        Create account
      </Link>
    </div>

  </div>
</div>
      }
     </>
    
  );
}

export default MyBooks;