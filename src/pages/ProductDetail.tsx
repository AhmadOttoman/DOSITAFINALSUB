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
            {/* Header with Title and Icon */}
            <div className="flex items-center gap-4 mb-6">
              {product.icon}
              <h1 className="text-4xl md:text-5xl font-bold text-engineering-navy">
                {product.title}
              </h1>
            </div>

            {/* Introduction Section */}
            <section>
              <h2 className="text-3xl font-bold text-engineering-navy mb-4">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.introduction || product.description}
              </p>
            </section>

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
                    <ul className="space-y-3">
                      {product.certifications.map((cert, index) => (
                        <li key={index} className="flex items-start text-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
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

            {/* Product Images Section */}
            <section>
              <h2 className="text-3xl font-bold text-engineering-navy mb-6">Product Images</h2>
              <ProductImageGallery
                images={[product.image, ...(product.productImages ?? [])]}
                productTitle={product.title}
              />
            </section>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                variant="industrial" 
                size="lg"
                className="w-full md:w-auto"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
