import { Link } from "react-router-dom";

function Categories() {
  const featuredCategories = [
    { slug: "fantasy", label: "Fantasy" },
    { slug: "romance", label: "Romance" },
    { slug: "mystery_and_detective_stories", label: "Mystery" },
    { slug: "science_fiction", label: "Science Fiction" },
    { slug: "history", label: "History" },
    { slug: "biography", label: "Biography" },
    { slug: "poetry", label: "Poetry" },
    { slug: "horror", label: "Horror" },
    { slug: "young_adult_fiction", label: "Young Adult" },
    { slug: "self_help", label: "Self-Help" },
    { slug: "thriller", label: "Thriller" },
    { slug: "classic_literature", label: "Classics" },
    { slug: "adventure", label: "Adventure" },
    { slug: "humor", label: "Humor" },
    { slug: "philosophy", label: "Philosophy" },
    { slug: "psychology", label: "Psychology" },
    { slug: "true_crime", label: "True Crime" },
    { slug: "travel", label: "Travel" },
    { slug: "cooking", label: "Cooking" },
    { slug: "art", label: "Art" },
    { slug: "business", label: "Business" },
    { slug: "religion", label: "Religion" },
    { slug: "graphic_novels", label: "Graphic Novels" },
    { slug: "children's_fiction", label: "Children's" },
    { slug: "drama", label: "Drama" },
  ];

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#FDF6EC] px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Intro */}
        <div className="mb-10 max-w-2xl">
           <button onClick={()=>window.history.back() } className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#B07A5A] hover:text-[#F58448]  transition-colors duration-200">
        
          <span>←</span> back
        </button>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B07A5A]">
            Explore the shelves
          </p>

          <h1 className="mt-2 font-serif text-4xl font-semibold text-[#332B26] sm:text-5xl">
            Find your genre
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#806F63] sm:text-base">
            From stories that take you somewhere completely new to books
            that help you see the world differently, find something that
            matches your mood.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              to={`/categories/${category.slug}`}
              className="group"
            >
              <div className="flex min-h-[100px] items-end rounded-2xl border border-[#E8DCCF] bg-[#FFF9F2] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB38A] hover:bg-[#FFF3E8] hover:shadow-md">
                <div>
                  <div className="mb-3 h-1 w-8 rounded-full bg-[#FFB38A] transition-all duration-300 group-hover:w-12" />

                  <h2 className="font-serif text-lg font-semibold text-[#332B26] transition-colors group-hover:text-[#A65F3F]">
                    {category.label}
                  </h2>

                  <p className="mt-1 text-xs text-[#A18F82]">
                    Explore books →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Categories;