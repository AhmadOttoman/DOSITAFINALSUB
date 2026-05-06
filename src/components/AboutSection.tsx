import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award } from "lucide-react";

const AboutSection = () => {
  const differentiators = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Lead Times",
      description: "Get the equipment you need, when you need it. Our streamlined processes ensure rapid delivery without compromising quality."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Superior Quality",
      description: "Built to last with premium materials and rigorous testing. Every system meets the highest industry standards."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Partnership Approach",
      description: "We work closely with you to understand your specific needs and deliver tailored solutions that exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-engineering-navy mb-6 uppercase tracking-tight">
            Why Choose
            <span className="block text-primary">DOSITA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three decades of engineering water treatment solutions for businesses 
            that demand reliability, efficiency, and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-professional transition-all duration-300 hover:-translate-y-1 border-0 shadow-card bg-gradient-to-br from-card to-secondary/20"
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-engineering-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;