import casePrototypeImg from "@/assets/portfolio-case-prototype.jpg";
import figurineImg from "@/assets/portfolio-figurine.jpg";
import plantStandImg from "@/assets/portfolio-plant-stand.jpg";
import characterImg from "@/assets/portfolio-character.png";
import phoneHolderImg from "@/assets/portfolio-phone-holder.jpg";
import mechanicalImg from "@/assets/portfolio-mechanical.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Прототип корпуса",
    description: "3D модель и печать корпуса для электроники",
    image: casePrototypeImg
  },
  {
    id: 2,
    title: "Декоративная фигурка",
    description: "Печать детализированной фигурки из PLA",
    image: figurineImg
  },
  {
    id: 3,
    title: "Подставка для цветочного горшка",
    description: "Декоративная подставка с уникальным дизайном",
    image: plantStandImg
  },
  {
    id: 4,
    title: "Игровой персонаж",
    description: "Многоцветная печать с ручной покраской",
    image: characterImg
  },
  {
    id: 5,
    title: "Держатель для телефона",
    description: "Индивидуальный дизайн подставки",
    image: phoneHolderImg
  },
  {
    id: 6,
    title: "Механический узел",
    description: "Функциональная деталь механизма",
    image: mechanicalImg
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Портфолио</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Примеры наших работ — от простых деталей до сложных проектов
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow group"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
