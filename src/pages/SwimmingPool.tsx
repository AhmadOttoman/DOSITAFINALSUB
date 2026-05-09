import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { swimmingPoolProducts } from "@/data/productsData.tsx";
import { ArrowRight } from "lucide-react";

const SwimmingPool = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-engineering-navy mb-6 uppercase tracking-tight">
              Swimming Pool
              <span className="block text-primary">Complete Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Professional swimming pool equipment and systems for pristine water quality, efficient operation, and optimal performance in aquatic facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {swimmingPoolProducts.map((product) => (
              <Card 
                key={product.id}
                className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-to-br from-card to-secondary/20 flex flex-col"
              >
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
                
                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
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
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SwimmingPool;
