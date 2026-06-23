import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import heroEquipment from "@/assets/hero-equipment.jpg";
import disinfectionSystems from "@/assets/disinfection-systems.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-background">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={disinfectionSystems}
        bgImageSrc={heroEquipment}
        title="Unmatched Legacy in Water Disinfection"
        date="DOSITA · Engineered Water Solutions"
        scrollToExpand="Scroll to Explore"
        textBlend
      >
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-black uppercase tracking-tight text-engineering-navy md:text-4xl">
            Built for the world's most demanding water systems
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            For decades, DOSITA has engineered disinfection and dosing systems
            trusted by contractors, consultants and facility engineers across
            commercial and industrial environments worldwide.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            From UV reactors and ozone generators to precision dosing and pool
            treatment, every product is designed for reliability, safety and
            compliance — purpose-built for the people who keep water moving.
          </p>
        </div>
      </ScrollExpandMedia>
    </section>
  );
};

export default HeroSection;
