import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { drinkingWaterProducts, swimmingPoolProducts } from "@/data/productsData.tsx";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [productId]);

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
              <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
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
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {product.introduction || product.description}
                  </p>
                </section>

                {/* Shopify-style product form / options block */}
                <div className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Availability
                  </p>
                  <p className="mt-1 text-sm font-medium text-engineering-navy">Contact for lead time</p>

                  <Separator className="my-5" />

                  <div className="space-y-2">
                    <Label htmlFor="product-qty" className="text-sm font-medium text-engineering-navy">
                      Quantity
                    </Label>
                    <div className="flex max-w-[11rem] items-stretch gap-0 rounded-md border border-input bg-background">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-11 shrink-0 rounded-none border-r border-input"
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        id="product-qty"
                        type="number"
                        min={1}
                        max={999}
                        value={quantity}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10);
                          if (Number.isNaN(v)) setQuantity(1);
                          else setQuantity(Math.min(999, Math.max(1, v)));
                        }}
                        className="h-11 border-0 text-center text-base font-medium shadow-none focus-visible:ring-0"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-11 shrink-0 rounded-none border-l border-input"
                        aria-label="Increase quantity"
                        onClick={() => setQuantity((q) => Math.min(999, q + 1))}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button variant="industrial" size="lg" className="mt-6 w-full sm:h-12">
                    Request quote
                  </Button>
                </div>
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
