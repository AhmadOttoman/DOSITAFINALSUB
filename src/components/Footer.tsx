import dositaLogo from "@/assets/dosita-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-engineering-navy py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <div className="max-w-2xl">
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
              className="mb-4 inline-block cursor-pointer rounded-sm outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <img src={dositaLogo} alt="Dosita" className="pointer-events-none h-16 w-auto select-none" draggable={false} />
            </Link>
            <div className="text-sm text-muted-foreground">
              <p>© 2026 Dosita. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;