import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { drinkingWaterProducts } from "@/data/productsData.tsx";

const DrinkingWater = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-engineering-navy sm:text-7xl lg:text-8xl">
            Drinking
            <br />
            <span className="text-primary">Water</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
            Advanced treatment systems ensuring the highest standards of water quality and safety.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {drinkingWaterProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 border border-border shadow-sm transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 p-3 text-primary backdrop-blur-sm">
                    {product.icon}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl md:text-3xl font-bold text-engineering-navy">
                  {product.title}
                </h3>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <Button
                  asChild
                  className="mt-auto w-full rounded-full bg-engineering-navy py-6 font-bold text-white transition-all hover:bg-primary hover:scale-[1.02] active:scale-95"
                >
                  <Link to={`/products/${product.id}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DrinkingWater;
