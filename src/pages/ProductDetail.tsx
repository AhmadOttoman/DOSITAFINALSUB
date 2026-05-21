import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductImageGallery } from "@/components/ProductImageGallery";
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
              <div className="rounded-[2.5rem] bg-secondary px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
                {product.specificationBullets?.length ? (
                  <ul className="divide-y divide-border/60">
                    {product.specificationBullets.map((item, index) => (
                      <li
                        key={index}
                        className="py-5 text-[0.9375rem] leading-[1.65] text-foreground/85 first:pt-0 last:pb-0 sm:py-6 sm:text-base md:text-lg md:leading-relaxed"
                      >
                        <span className="mr-2 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <dl className="divide-y divide-border/60">
                    {Object.entries(product.specifications ?? {}).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-6"
                      >
                        <dt className="shrink-0 font-medium text-muted-foreground sm:max-w-[40%]">{key}</dt>
                        <dd className="font-semibold leading-relaxed text-engineering-navy sm:text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </section>
          )}

          {/* Safety & Installation Notes */}
          {product.safetyInstallationBullets?.length ? (
            <section className="mt-24">
              <h2 className="mb-12 text-3xl md:text-5xl font-black uppercase tracking-tighter text-engineering-navy">
                {product.safetyInstallationTitle ?? "Safety & Installation Notes"}
              </h2>
              <div className="rounded-[2.5rem] bg-secondary px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
                <ul className="divide-y divide-border/60">
                  {product.safetyInstallationBullets.map((item, index) => (
                    <li
                      key={index}
                      className="py-5 text-[0.9375rem] leading-[1.65] text-foreground/85 first:pt-0 last:pb-0 sm:py-6 sm:text-base md:text-lg md:leading-relaxed"
                    >
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
