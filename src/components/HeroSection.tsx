const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-28 sm:pt-32">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center px-6 text-center md:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-engineering-navy sm:text-6xl lg:text-8xl">
            Unmatched Legacy in
            <br />
            Water Disinfection Equipment
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Engineered systems for safer, cleaner water in commercial and industrial
            environments worldwide.
          </p>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
