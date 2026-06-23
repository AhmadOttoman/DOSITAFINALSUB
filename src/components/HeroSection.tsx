const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[3.375rem] font-black uppercase leading-[0.9] tracking-tighter text-engineering-navy md:text-[5.625rem]">
          Unmatched
          <br />
          Legacy in
          <br />
          <span className="text-primary">Water</span> Disinfection
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-2xl">
          Engineered systems for safer, cleaner water in commercial and industrial
          environments worldwide.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
