import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Centered heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 tracking-tighter text-engineering-navy">
            Get in
            <br />
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Reach our specialized teams in Turkiye, Italy, and the U.A.E. for
            customized water engineering solutions.
          </p>
        </div>

        {/* Office cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              country: "Turkiye",
              address: "Ciftlik, Bilgin Caddesi No 34, 41650 Golcuk Kocaeli",
              phone: "+90 262 5023097",
            },
            {
              country: "Italy",
              address: "V. Dottor Renato Balducci, 39, 02043, Contigliano Rieti",
              phone: "+39 393 8917942",
            },
            {
              country: "U.A.E.",
              address: "U.A.E., Sharjah, SAIF Zone, Q9-01, P.O. Box 9430",
              phone: "+971 50 3701692",
            },
          ].map((office) => (
            <div
              key={office.country}
              className="p-8 rounded-2xl bg-secondary border border-border hover:shadow-[var(--shadow-card)] transition-all"
            >
              <h4 className="font-bold text-xl mb-4 text-primary">{office.country}</h4>
              <div className="flex items-start gap-2 mb-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-engineering-navy" />
                <p className="text-sm leading-relaxed">{office.address}</p>
              </div>
              <div className="flex items-center gap-2 text-engineering-navy">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm font-mono">{office.phone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-secondary rounded-[2.5rem] p-8 md:p-10 text-engineering-navy">
          <h3 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Full Name
                </Label>
                <Input id="name" placeholder="Full Name" className="bg-background border-none rounded-xl p-4 h-auto" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Company
                </Label>
                <Input id="company" placeholder="Your Company" className="bg-background border-none rounded-xl p-4 h-auto" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-60">
                Email Address
              </Label>
              <Input id="email" type="email" placeholder="email@company.com" className="bg-background border-none rounded-xl p-4 h-auto" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-60">
                Message
              </Label>
              <Textarea id="message" placeholder="How can we help?" rows={5} className="bg-background border-none rounded-xl p-4 resize-none" />
            </div>

            <Button
              type="submit"
              className="w-full py-6 rounded-xl bg-primary text-white font-bold text-base hover:brightness-110 transition-all"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
