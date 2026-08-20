import desktopHero from "../assets/hero-desktop.png";
import mobileHero from "../assets/hero-mobile.png";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDF6EC]">

      {/* Desktop image */}
      <div className="absolute inset-y-0 right-0 hidden w-[70%] md:block">
        <img
          src={desktopHero}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Fade image into page */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6EC] via-[#FDF6EC]/70 to-transparent" />
      </div>

      {/* Mobile image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={mobileHero}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-[#FDF6EC]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDF6EC] via-[#FDF6EC]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 sm:min-h-[560px] sm:px-8 md:min-h-[540px] md:px-10 lg:px-12">

        <div className="max-w-xl">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B07A5A] sm:text-sm">
            A world of stories
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#332B26] sm:text-5xl md:text-6xl lg:text-7xl">
            Find your next
            <br />
            favorite book.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#806F63] sm:text-base">
            Discover stories worth remembering, explore new worlds,
            and keep track of the books you want to read.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">

            <Link
              to="/popular-all"
              className="rounded-full bg-[#9B5E3C] px-6 py-3 text-sm font-medium text-[#FFF7E8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7F4930] hover:shadow-lg"
            >
              Explore books
            </Link>

            <Link
              to="/categories"
              className="rounded-full border border-[#D8C8BA] bg-[#FDF6EC]/80 px-6 py-3 text-sm font-medium text-[#66574D] backdrop-blur-sm transition-all duration-300 hover:border-[#B07A5A] hover:bg-[#FFF9F2]"
            >
              Browse genres
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;