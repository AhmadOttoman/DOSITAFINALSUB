import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-engineering-navy mb-6 uppercase tracking-tight">
            Get In
            <span className="block text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our offices in Turkiye, Italy, and the U.A.E.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-professional border-0 bg-gradient-to-br from-card to-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-engineering-navy">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Full Name"
                    className="border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company"
                    className="border-border focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="email@company.com"
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Message"
                  rows={5}
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-0 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="pt-6 space-y-6">
                <h3 className="text-2xl font-semibold text-engineering-navy">Contact</h3>

                <div className="rounded-xl border border-border/70 bg-background/60 p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p className="font-semibold text-engineering-navy">
                      Dosita Havuz Ve Su Teknolojileri Ltd. Sti.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Ciftlik, Bilgin Caddesi No 34, 41650 Golcuk Kocaeli - Turkiye
                  </p>
                  <div className="flex items-center gap-2 text-engineering-navy font-medium">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+90 262 5023097</span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/70 bg-background/60 p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p className="font-semibold text-engineering-navy">Dosita S.R.L.</p>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    V. Dottor Renato Balducci, 39, 02043, Contigliano Rieti - Italy
                  </p>
                  <div className="flex items-center gap-2 text-engineering-navy font-medium">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+39 393 8917942</span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/70 bg-background/60 p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p className="font-semibold text-engineering-navy">
                      Dosita Havuz Havuz Middle East F.Z.E.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    U.A.E., Sharjah, SAIF Zone, Q9-01, P.O. Box 9430
                  </p>
                  <div className="flex items-center gap-2 text-engineering-navy font-medium">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+971 50 3701692</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;