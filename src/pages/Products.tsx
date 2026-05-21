import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Droplets, Waves } from "lucide-react";

const Products = () => {
  const categories = [
    {
      id: "drinking-water",
      title: "Drinking Water",
      tagline: "Pure. Safe. Engineered.",
      path: "/products/drinking-water",
      icon: <Droplets className="h-16 w-16 text-primary" strokeWidth={1.25} />,
    },
    {
      id: "swimming-pool",
      title: "Swimming Pool",
      tagline: "Clarity in every drop.",
      path: "/products/swimming-pool",
      icon: <Waves className="h-16 w-16 text-primary" strokeWidth={1.25} />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-engineering-navy sm:text-7xl lg:text-8xl">
            Professional
            <br />
            <span className="text-primary">Equipment</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
            Complete solutions for water treatment, engineered with uncompromising precision.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-secondary p-12 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="mb-12 flex h-56 items-center justify-center rounded-2xl bg-white">
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-engineering-navy">
                  {category.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground">{category.tagline}</p>
                <div className="mt-8 inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary">
                  View Products
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
