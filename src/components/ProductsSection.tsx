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
  
  // Combine all products from both categories
  const allProducts = [...drinkingWaterProducts, ...swimmingPoolProducts];

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
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-engineering-navy mb-6 uppercase tracking-tight">
            Products
            <span className="block text-primary">Excellence In Every Detail</span>
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
                  <Card className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-to-br from-card to-secondary/20 h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-engineering-navy/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          {product.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-engineering-navy group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 flex flex-col flex-grow">
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant="industrial" 
                        className="w-full group-hover:bg-primary group-hover:text-white mt-auto"
                        asChild
                      >
                        <Link to={`/products/${product.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-secondary" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-secondary" />
          </Carousel>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
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