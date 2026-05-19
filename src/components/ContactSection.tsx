import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-engineering-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading + offices */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
              Get in
              <br />
              <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg md:text-xl opacity-70 mb-12 leading-relaxed font-medium max-w-md">
              Reach our specialized teams in Turkiye, Italy, and the U.A.E. for
              customized water engineering solutions.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-lg mb-2 text-primary">Turkiye</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-2">
                  Ciftlik, Bilgin Caddesi No 34, 41650 Golcuk Kocaeli
                </p>
                <p className="text-sm font-mono">+90 262 5023097</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-lg mb-2 text-primary">Italy</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-2">
                  V. Dottor Renato Balducci, 39, 02043, Contigliano Rieti
                </p>
                <p className="text-sm font-mono">+39 393 8917942</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-lg mb-2 text-primary">U.A.E.</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-2">
                  U.A.E., Sharjah, SAIF Zone, Q9-01, P.O. Box 9430
                </p>
                <p className="text-sm font-mono">+971 50 3701692</p>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 text-engineering-navy shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-60">
                    Full Name
                  </Label>
                  <Input id="name" placeholder="Full Name" className="bg-secondary border-none rounded-xl p-4 h-auto" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest opacity-60">
                    Company
                  </Label>
                  <Input id="company" placeholder="Your Company" className="bg-secondary border-none rounded-xl p-4 h-auto" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Email Address
                </Label>
                <Input id="email" type="email" placeholder="email@company.com" className="bg-secondary border-none rounded-xl p-4 h-auto" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Message
                </Label>
                <Textarea id="message" placeholder="How can we help?" rows={5} className="bg-secondary border-none rounded-xl p-4 resize-none" />
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
      </div>
    </section>
  );
};

export default ContactSection;
