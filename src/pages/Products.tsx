import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const categories = [
    {
      id: "drinking-water",
      title: "Drinking Water",
      path: "/products/drinking-water",
      icon: <Droplets className="h-12 w-12 text-primary" />
    },
    {
      id: "swimming-pool",
      title: "Swimming Pool Products",
      path: "/products/swimming-pool",
      icon: <Waves className="h-12 w-12 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-engineering-navy mb-6 uppercase tracking-tight">
              Professional Equipment
              <span className="block text-primary">Complete Solutions</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-to-br from-card to-secondary/20 flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-6 p-8 bg-secondary/50 rounded-lg">
                    {category.icon}
                  </div>
                  <CardTitle className="text-3xl text-engineering-navy group-hover:text-primary transition-colors text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <Button 
                    variant="industrial" 
                    className="w-full group-hover:bg-primary group-hover:text-white mt-auto"
                    asChild
                  >
                    <Link to={category.path}>
                      View Products
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

export default Products;