import { Zap, HeartHandshake, Gem, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Быстрые сроки",
    description: "Выполняем заказы от 1 рабочего дня"
  },
  {
    icon: HeartHandshake,
    title: "На связи",
    description: "Отвечаем на вопросы в Telegram и по телефону"
  },
  {
    icon: Gem,
    title: "Гарантия качества",
    description: "Контролируем каждый этап работы"
  },
  {
    icon: Sparkles,
    title: "Индивидуальный подход",
    description: "Учитываем все ваши пожелания"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">О нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы делаем 3D технологии доступными для каждого в Воронеже
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 mb-10">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong className="text-primary">«3D печать — легко»</strong> — это команда энтузиастов, которая помогает воплощать идеи в реальность с помощью 3D технологий.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы специализируемся на создании 3D моделей и печати объектов любой сложности. Работаем как с частными заказчиками, так и с бизнесом. Наша цель — сделать процесс максимально простым и понятным для клиента.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Находимся в Воронеже и работаем по всей области. Возможна доставка готовых изделий.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
