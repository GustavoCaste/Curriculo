
import { Code, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden mb-8 shadow-lg">
  <img
    src="/img/perfil.png"
    alt="Foto de Gustavo Castelluccio"
    className="w-full h-full object-cover"
  />
</div>


          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gustavo Castelluccio
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground">
              da Costa Lima
            </h2>
            <div className="flex justify-center items-center space-x-2 text-lg">
              <Code size={24} className="text-blue-600" />
              <span className="font-semibold text-primary">Desenvolvedor FullStack Júnior</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolvedor FullStack Júnior com experiência prática em <strong>Java 17</strong>, 
              <strong> Spring Framework</strong>, <strong>Angular</strong> e tecnologias web modernas. 
              Busco aplicar meus conhecimentos no desenvolvimento de soluções escaláveis e robustas, 
              participando de todas as etapas do ciclo de vida do software. Tenho interesse em integrar 
              equipes ágeis, contribuindo com o desenvolvimento de APIs RESTful, testes automatizados e 
              interfaces responsivas, com foco na evolução contínua e aprendizado em ambientes colaborativos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("experiencia")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Briefcase className="mr-2" size={20} />
              Ver Experiência
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contato")}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
