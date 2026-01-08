import { Phone, Send } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo size="default" />
            <div>
              <span className="font-bold text-foreground">3D печать</span>
              <span className="text-primary font-medium ml-1">— легко</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+79009261124" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">8 900 926-11-24</span>
            </a>
            <a 
              href="https://t.me/your_telegram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Send className="w-4 h-4" />
              <span className="text-sm">Telegram</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2025 Воронеж</p>
            <p className="text-xs mt-1">
              Разработано{" "}
              <a 
                href="https://noirdig.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                Noirdig Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
