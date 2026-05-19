const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-engineering-navy md:text-6xl">
            About <span className="text-primary">Dosita</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three decades of engineering excellence.
          </p>
        </div>

        <div className="space-y-6 text-center text-lg leading-loose text-muted-foreground md:text-xl">
          <p>
            Dosita Havuz Ve Su Teknolojileri Ltd. is very keen to reach out and promote
            its strength in the water treatment industry and swimming pool products.
            Dosita is among a handful of companies specialized in offering a wide range
            of water and air disinfection solutions under one umbrella.
          </p>
          <p>
            Our key product categories are: UV, Ozone Generators, Copper/Silver
            Ionization & Dosing Systems. We also design & build all our electronics
            in-house, ensuring superior design, high quality materials, and multiple
            layers of control & protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
