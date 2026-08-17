import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
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
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-engineering-navy md:text-6xl">
            Products
            <br />
            <span className="text-primary">Excellence in every detail</span>
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
                  <Card className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-border bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-2xl">
                    <div className="relative mb-4 h-56 w-full overflow-hidden rounded-2xl bg-white md:h-64">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-6 text-center text-lg font-bold text-engineering-navy md:text-xl">
                      {product.title}
                    </h3>
                    <Button
                      asChild
                      className="mt-auto w-full rounded-full bg-engineering-navy py-6 font-bold text-white transition-all hover:scale-[1.02] hover:bg-primary active:scale-95"
                    >
                      <Link to={`/products/${product.id}`}>Learn More</Link>
                    </Button>
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
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;