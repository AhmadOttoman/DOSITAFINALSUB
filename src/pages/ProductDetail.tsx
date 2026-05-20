import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { drinkingWaterProducts, swimmingPoolProducts } from "@/data/productsData.tsx";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const allProducts = [...drinkingWaterProducts, ...swimmingPoolProducts];
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="mx-auto max-w-3xl px-6 py-40 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-engineering-navy">
            Product Not Found
          </h1>
          <Button
            onClick={() => navigate("/products")}
            className="mt-8 rounded-full bg-engineering-navy px-8 py-6 font-bold text-white hover:bg-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const resourceSections: Array<{ title: string; items: Array<{ title: string; url: string }> }> = [
    product.certifications?.length ? { title: "Certifications", items: product.certifications } : null,
    product.brochures?.length ? { title: "Brochures", items: product.brochures } : null,
    product.manuals?.length ? { title: "Manuals", items: product.manuals } : null,
  ].filter(Boolean) as Array<{ title: string; items: Array<{ title: string; url: string }> }>;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Button
            onClick={() => navigate("/products")}
            variant="ghost"
            className="mb-12 rounded-full font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>

          {/* Hero: gallery + summary */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="flex min-w-0 w-full justify-center rounded-[2.5rem] bg-secondary p-8 lg:sticky lg:top-24 lg:self-start">
              <h2 className="sr-only">Product images</h2>
              <ProductImageGallery
                images={[product.image, ...(product.productImages ?? [])]}
                productTitle={product.title}
              />
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="mt-2 shrink-0 text-primary">{product.icon}</div>
                <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tighter text-engineering-navy sm:text-5xl lg:text-6xl">
                  {product.title}
                </h1>
              </div>

              <div>
                <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                  {product.overviewTitle ?? "Overview"}
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                  {(product.introduction || product.description)
                    .split(/\n\n+/)
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {(product.specificationBullets?.length || product.specifications) && (
            <section className="mt-32">
              <h2 className="mb-12 text-3xl md:text-5xl font-black uppercase tracking-tighter text-engineering-navy">
                Specifications
              </h2>
              <div className="rounded-[2.5rem] bg-secondary p-10 md:p-12">
                <div className="space-y-1">
                  {product.specificationBullets?.length ? (
                    product.specificationBullets.map((item, index) => (
                      <p
                        key={index}
                        className="border-b border-border/60 py-4 text-base leading-relaxed text-foreground/80 last:border-0 md:text-lg"
                      >
                        • {item}
                      </p>
                    ))
                  ) : (
                    Object.entries(product.specifications ?? {}).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between border-b border-border/60 py-4 last:border-0"
                      >
                        <span className="font-medium text-muted-foreground">{key}</span>
                        <span className="font-semibold text-engineering-navy">{value}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Safety & Installation Notes */}
          {product.safetyInstallationBullets?.length ? (
            <section className="mt-24">
              <h2 className="mb-12 text-3xl md:text-5xl font-black uppercase tracking-tighter text-engineering-navy">
                {product.safetyInstallationTitle ?? "Safety & Installation Notes"}
              </h2>
              <div className="rounded-[2.5rem] bg-secondary p-10 md:p-12">
                <div className="space-y-1">
                  {product.safetyInstallationBullets.map((item, index) => (
                    <p
                      key={index}
                      className="border-b border-border/60 py-4 text-base leading-relaxed text-foreground/80 last:border-0 md:text-lg"
                    >
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Resources */}
          {resourceSections.map((section) => (
            <section key={section.title} className="mt-24">
              <h2 className="mb-10 text-3xl md:text-5xl font-black uppercase tracking-tighter text-engineering-navy">
                {section.title}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {section.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl bg-secondary p-6 transition-all hover:bg-white hover:shadow-lg"
                  >
                    <span className="font-medium text-engineering-navy">{item.title}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
