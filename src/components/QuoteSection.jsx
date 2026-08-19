function QuoteSection() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="relative mx-auto flex min-h-[220px] max-w-7xl items-center overflow-hidden rounded-3xl bg-[#332B26] px-7 py-10 sm:px-12 lg:px-16">

        {/* Decorative circles */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFB38A]/10" />
        <div className="absolute -bottom-20 right-20 h-40 w-40 rounded-full bg-[#F2D2B6]/10" />

        <div className="relative z-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#FFB38A]">
            A little reminder
          </p>

          <blockquote className="font-serif text-2xl leading-relaxed text-[#FFF7E8] sm:text-3xl lg:text-4xl">
            “There is no friend as loyal as a book.”
          </blockquote>

          <p className="mt-4 text-sm text-[#D8C9BC]">
            — Ernest Hemingway
          </p>
        </div>

        {/* Decorative book */}
        <div className="absolute right-8 bottom-0 hidden rotate-[-8deg] sm:block">
          <div className="h-32 w-24 rounded-r-md rounded-l-sm bg-[#B07A5A] shadow-xl">
            <div className="absolute left-3 top-5 h-1 w-14 rounded-full bg-[#FDF6EC]/40" />
            <div className="absolute left-3 top-9 h-1 w-10 rounded-full bg-[#FDF6EC]/30" />
            <div className="absolute bottom-5 left-3 right-3 h-px bg-[#FDF6EC]/20" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default QuoteSection;