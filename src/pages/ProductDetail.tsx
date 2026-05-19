import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ArrowLeft } from "lucide-react";
import { drinkingWaterProducts, swimmingPoolProducts } from "@/data/productsData.tsx";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const allProducts = [...drinkingWaterProducts, ...swimmingPoolProducts];
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-engineering-navy mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')} variant="industrial">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Button 
            onClick={() => navigate('/products')} 
            variant="ghost" 
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>

          <div className="space-y-12">
            {/* Shopify-style: media + product summary side by side on large screens */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="flex min-w-0 w-full justify-center lg:sticky lg:top-24 lg:self-start">
                <h2 className="sr-only">Product images</h2>
                <ProductImageGallery
                  images={[product.image, ...(product.productImages ?? [])]}
                  productTitle={product.title}
                />
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">{product.icon}</div>
                  <h1 className="text-3xl font-bold leading-tight text-engineering-navy md:text-4xl lg:text-5xl">
                    {product.title}
                  </h1>
                </div>

                <section>
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Overview
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {(product.introduction || product.description)
                      .split(/\n\n+/)
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph.trim()}</p>
                      ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Specifications Section */}
            <section>
              <h2 className="text-3xl font-bold text-engineering-navy mb-6">Specifications</h2>
              <Card className="border-0 shadow-card bg-gradient-to-br from-card to-secondary/20">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground font-medium">{key}:</span>
                        <span className="text-foreground font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Certifications Section */}
            {product.certifications && product.certifications.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-engineering-navy mb-6">Certifications</h2>
                <Card className="border-0 shadow-card bg-gradient-to-br from-card to-secondary/20">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {product.certifications.map((cert, index) => (
                        <a
                          key={index}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {cert.title}
                          </span>
                          <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Manuals Section */}
            {product.manuals && product.manuals.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-engineering-navy mb-6">Manuals</h2>
                <Card className="border-0 shadow-card bg-gradient-to-br from-card to-secondary/20">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {product.manuals.map((manual, index) => (
                        <a
                          key={index}
                          href={manual.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {manual.title}
                          </span>
                          <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
