import parchment from "../assets/parchment.png";
import love from "../assets/love-coffee-cup.png";
import knife from "../assets/knife.png";
import leaf from "../assets/leaf.png";
import { Link } from "react-router";

function CategoryListing() {
  const categories = [
    {
      path: "/categories/romance",
      image: love,
      title: "Romance",
      description: "Stories about love",
      bg: "bg-[#FBE4D4]",
    },
    {
      path: "/categories/thriller",
      image: leaf,
      title: "Thriller",
      description: "Keep turning the pages",
      bg: "bg-[#E6E8D8]",
    },
    {
      path: "/categories/history",
      image: parchment,
      title: "History",
      description: "Stories from the past",
      bg: "bg-[#F2E4C9]",
    },
    {
      path: "/categories/horror",
      image: knife,
      title: "Horror",
      description: "Something a little darker",
      bg: "bg-[#E8DCD6]",
    },
  ];

  return (
    <section className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B07A5A]">
              Find your mood
            </p>

            <h2 className="mt-1 font-serif text-2xl font-semibold text-[#332B26] sm:text-3xl">
              Explore by genre
            </h2>
          </div>

          <Link
            to="/categories"
            className="hidden text-sm font-medium text-[#9B5E3C] transition hover:text-[#70432F] sm:block"
          >
            View all →
          </Link>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.path}
              className="group"
            >
              <div
                className={`relative flex min-h-[150px] overflow-hidden rounded-2xl ${category.bg} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >

                {/* Text */}
                <div className="relative z-10 self-end">
                  <h3 className="font-serif text-xl font-semibold text-[#332B26]">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#806F63]">
                    {category.description}
                  </p>
                </div>

                {/* Illustration */}
                <img
                  src={category.image}
                  alt=""
                  className="absolute right-2 top-2 h-20 w-20 object-contain transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                />

              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <Link
          to="/categories"
          className="mt-5 block text-center text-sm font-medium text-[#9B5E3C] sm:hidden"
        >
          View all categories →
        </Link>

      </div>
    </section>
  );
}

export default CategoryListing;