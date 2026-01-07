import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import printerBg from "@/assets/3d-printer-bg.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.35]"
        style={{ backgroundImage: `url(${printerBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Превращаем идеи в реальность
            <span className="block text-primary mt-2">с помощью 3D технологий</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаём 3D модели и печатаем любые объекты. От идеи до готового изделия — быстро, качественно и доступно.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToServices} className="gap-2">
              Выбрать услугу
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#portfolio">Смотреть работы</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
