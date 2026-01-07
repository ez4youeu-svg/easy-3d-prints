import { useState } from "react";
import casePrototypeImg from "@/assets/portfolio-case-prototype.jpg";
import figurineImg from "@/assets/portfolio-figurine.jpg";
import plantStandImg from "@/assets/portfolio-plant-stand.jpg";
import characterImg from "@/assets/portfolio-character.png";

const portfolioItems = [
  {
    id: 1,
    title: "Прототип корпуса",
    category: "Моделирование",
    description: "3D модель и печать корпуса для электроники",
    image: casePrototypeImg
  },
  {
    id: 2,
    title: "Декоративная фигурка",
    category: "Печать",
    description: "Печать детализированной фигурки из PLA",
    image: figurineImg
  },
  {
    id: 3,
    title: "Подставка для цветочного горшка",
    category: "Моделирование",
    description: "Декоративная подставка с уникальным дизайном",
    image: plantStandImg
  },
  {
    id: 4,
    title: "Игровой персонаж",
    category: "Печать",
    description: "Многоцветная печать с ручной покраской",
    image: characterImg
  },
  {
    id: 5,
    title: "Держатель для телефона",
    category: "Моделирование",
    description: "Индивидуальный дизайн подставки",
    image: null
  },
  {
    id: 6,
    title: "Механический узел",
    category: "Печать",
    description: "Функциональная деталь механизма",
    image: null
  }
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState<string>("Все");

  const filteredItems = filter === "Все" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Портфолио</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Примеры наших работ — от простых деталей до сложных проектов
          </p>
          
          {/* Filter buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            {["Все", "Моделирование", "Печать"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow group"
            >
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">3D</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Изображение проекта</p>
                  </div>
                </div>
              )}
              <div className="p-5">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {item.category}
                </span>
                <h3 className="font-semibold text-foreground mt-3 mb-2">{item.title}</h3>
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
