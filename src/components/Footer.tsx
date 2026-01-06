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
              href="tel:+79001234567" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+7 900 123-45-67</span>
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
          <p className="text-sm text-muted-foreground">
            © 2024 Воронеж
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
