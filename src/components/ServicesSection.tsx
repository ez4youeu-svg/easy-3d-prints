import { Cuboid, Printer, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import modelingBg from "@/assets/3d-modeling-bg.jpg";

const services = [
  {
    icon: Cuboid,
    title: "3D Моделирование",
    description: "Создание 3D моделей любой сложности по вашим чертежам, эскизам или описанию. Подготовка файлов для печати.",
    features: [
      "Разработка с нуля по вашей идее",
      "Оптимизация модели для печати",
      "Форматы STL, OBJ, STEP",
      "Консультация и доработка"
    ],
    price: "от 500 ₽"
  },
  {
    icon: Printer,
    title: "3D Печать",
    description: "Печать готовых моделей на современном оборудовании. Различные материалы и цвета на выбор.",
    features: [
      "PLA, PETG, ABS пластик",
      "Высокая детализация",
      "Крупногабаритная печать",
      "Постобработка изделий"
    ],
    price: "от 300 ₽"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.35]"
        style={{ backgroundImage: `url(${modelingBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/60" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Два направления для решения ваших задач — от создания модели до готового изделия
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="text-lg font-semibold text-primary">{service.price}</span>
                <Button size="sm" asChild>
                  <a href="tel:+79009261124" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Заказать
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Не знаете, что выбрать?</p>
          <Button variant="outline" asChild>
            <a href="https://t.me/Printingiseasy_bot" target="_blank" rel="noopener noreferrer" className="gap-2">
              Получить консультацию
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
