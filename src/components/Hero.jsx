import header from "../assets/headerr.png";
function Hero (){
return(
  
   <div className="relative flex min-h-[360px] h-[55vh] overflow-hidden bg-[#24201D] lg:h-[100vh]">
        <div className="relative z-10 flex w-[55%] items-center px-6 sm:px-8 md:px-10 lg:px-14">
          <div className="max-w-lg">
            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-[#FFB38A] uppercase sm:mb-3 p-5">
              A world of stories
            </p>

            <h1 className="font-serif text-3xl leading-tight text-[#FFF7E8] sm:text-4xl md:text-5xl lg:text-6xl">
              Find your next
              <br />
              favorite book.
            </h1>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#D8C9BC] sm:mt-4 sm:text-base">
              Discover stories worth remembering and keep track of the books you
              want to read.
            </p>

            <button className="mt-5 rounded-full bg-[#FFB38A] px-5 py-2.5 text-sm font-medium text-[#24201D] transition duration-300 hover:bg-[#FFD6A5] hover:shadow-lg sm:mt-6">
              Explore books
            </button>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-[65%] ">
          <img
            src={header}
            alt="Cozy library"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#24201D] via-[#24201D]/50 to-transparent" />
        </div>
      </div>
  
)
}
export default Hero