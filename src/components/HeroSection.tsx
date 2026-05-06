import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-equipment.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-engineering-navy/90 via-aqua-teal/70 to-engineering-navy/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm md:text-base text-white/80 mb-4 tracking-widest uppercase font-light">
            Since 1994
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white uppercase tracking-tight">
            Unmatched Legacy in Swimming Pool Equipment
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto font-light">
            And accessories where excellence embraces innovation.
          </p>
          
          <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold uppercase tracking-wide">
            Learn More
          </Button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
