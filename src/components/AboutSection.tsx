const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-engineering-navy mb-6 uppercase tracking-tight">
            About
            <span className="block text-primary">DOSITA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three decades of engineering water treatment solutions for businesses 
            that demand reliability, efficiency, and exceptional service.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-background p-8 md:p-10 shadow-card">
          <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground md:text-lg">
            {`Dosita Havuz Ve Su Teknolojileri Ltd. is very keen to reach out and promote its strength in the water
treatment Industry and swimming pool products.
Dosita is among a handful of companies specialized in offering a wide range of water and air
disinfection solutions under one umbrella.
Our key product categories are: UV, Ozone Generators, Copper/Silver Ionization & Dosing Systems.
We also design & build all our electronics in house, and we conduct any necessary trouble shooting
& repairs in the same facility.
Other than disinfection, we manufacture high quality electrical heaters for swimming pools, with a
superior design, procuring high quality materials, & multiple layers of control & protection.
Dosita is a live example of a true engineering company that manages the most essential work in
house. We are qualified in SS fabrication, from tig welding to a variety of surface finishes, and the
customized fabrication of the UV’s key components.`}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;