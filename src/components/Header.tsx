import { Phone, Send, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">3D</span>
            </div>
            <div>
              <h1 className="font-semibold text-foreground text-lg leading-tight">3D печать</h1>
              <p className="text-xs text-muted-foreground">легко</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-muted-foreground hover:text-foreground transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="tel:+79001234567" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Позвонить
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("services")} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </button>
              <div className="flex gap-3 mt-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Telegram
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href="tel:+79001234567" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
