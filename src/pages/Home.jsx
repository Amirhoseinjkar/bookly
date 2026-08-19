import { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import BookGrid from "../components/BookGrid.jsx";
import { Link } from "react-router";
import CategoryListing from "../components/CategoryListing.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import {newReleases} from '../api.js'
function Home() {
  const [books, setBooks] = useState([]);
  const [newBooks,setNewBooks]=useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://openlibrary.org/trending/monthly.json?limit=10&page=1"
      );

      const data = await response.json();

      setBooks(data.works);
          const newReleaseResponse = await newReleases()
          setNewBooks(newReleaseResponse)


    }


    getData();
  }, []);
console.log(newBooks)
  return (
    <>

      <main className="bg-[#FDF6EC]">
        
        <Hero  />
        
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

          {/* Section heading */}
          <div className="mb-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B07A5A]">
              Discover something new
            </p>

            <div className="mt-1 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-semibold text-[#332B26] sm:text-3xl">
                Popular this month
              </h2>
                 <Link to='/popular-all'>
              <button className=" text-sm font-medium text-[#9B5E3C] transition-colors hover:text-[#FF9B68] sm:block ">
                See all →
              </button>
              </Link>
              
            </div>

            <div className="mt-3 h-[2px] w-16 rounded-full bg-[#FFB38A]" />
          </div>

          {/* Books */}
          <BookGrid books={books} />

        </section>
        <CategoryListing />
        <h2 className="font-serif text-2xl font-semibold text-[#332B26] sm:text-3xl pl-9">
                Top rated fiction
              </h2>
              <div className="px-9">
          <BookGrid books={newBooks} />
          </div>
          <QuoteSection />
      </main>
    </>
  );
}

export default Home;