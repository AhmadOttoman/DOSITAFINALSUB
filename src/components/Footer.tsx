import { Separator } from "@/components/ui/separator";
import dositaLogo from "@/assets/dosita-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-engineering-navy py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <div className="max-w-2xl">
            <img src={dositaLogo} alt="Dosita" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Engineering excellence in water treatment solutions. 
              Trusted by businesses worldwide for reliable, 
              efficient, and compliant water systems.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>© 2024 Dosita. All rights reserved.</p>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Certifications</a>
          </div>
          <div>
            Engineered for Excellence Since 1994
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;