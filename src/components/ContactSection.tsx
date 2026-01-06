import { Phone, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом — ответим на все вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-background rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Воронеж</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: по договорённости</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Готовы обсудить проект?
              </h3>
              <p className="text-muted-foreground mb-6">
                Напишите в Telegram или позвоните — расскажем о возможностях и ответим на вопросы.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 flex-1" asChild>
                  <a href="tel:+79001234567">
                    <Phone className="w-5 h-5" />
                    Позвонить
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 flex-1" asChild>
                  <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                    <Send className="w-5 h-5" />
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
