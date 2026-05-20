import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { drinkingWaterProducts, swimmingPoolProducts } from "@/data/productsData.tsx";

const ProductsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Combine products from both categories (dedupe shared entries e.g. Copper Silver Ionization)
  const allProducts = [...drinkingWaterProducts, ...swimmingPoolProducts].filter(
    (product, index, products) =>
      products.findIndex((p) => p.id === product.id) === index
  );

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section id="products" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter text-engineering-navy mb-4">
            Products
            <br />
            <span className="text-primary text-3xl md:text-5xl">Excellence in every detail</span>
          </h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group relative bg-white rounded-[2.5rem] p-8 border border-border shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 w-full bg-gradient-to-br from-secondary to-muted rounded-2xl mb-8 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-3 rounded-full text-primary">
                        {product.icon}
                      </div>
                    </div>

                    <CardContent className="p-0 flex flex-col flex-grow">
                      <h3 className="text-2xl md:text-3xl font-bold text-engineering-navy mb-4">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {product.description}
                      </p>

                      <ul className="space-y-3 mb-10 text-sm font-medium text-foreground/70">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className="w-full py-6 rounded-full bg-engineering-navy text-white font-bold hover:bg-primary hover:scale-[1.02] active:scale-95 transition-all mt-auto"
                      >
                        <Link to={`/products/${product.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-16">
            <Button
              asChild
              className="px-8 py-6 rounded-full border-2 border-engineering-navy bg-transparent text-engineering-navy font-bold text-sm uppercase tracking-widest hover:bg-secondary"
            >
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;