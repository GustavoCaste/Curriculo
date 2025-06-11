
import { Briefcase, Calendar, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const responsibilities = [
    "Desenvolvimento backend com Java 17 e Spring Framework, com foco em criação e mapeamento de entidades",
    "Implementação de regras de negócio com validações customizadas e testes unitários utilizando JUnit e padrão PMD",
    "Desenvolvimento frontend com Angular, TypeScript, HTML, CSS e Bootstrap, criando telas completas de cadastro, listagem e edição",
    "Realização de consultas no banco de dados e manipulação de dados para exibição e validação",
    "Versionamento com Git e GitLab, utilizando pipelines de CI/CD e práticas de DevOps",
    "Participação em projetos interligados e controle de versões entre sistemas",
    "Vivência com metodologias ágeis como SCRUM e Kanban, contribuindo para sprints e entregas contínuas"
  ];

  return (
    <section id="experiencia" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground">
            Minha jornada no desenvolvimento de software
          </p>
        </div>

        <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl">
                    Estagiário FullStack
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-medium">
                    Tribunal de Contas do Estado e dos Municípios da Bahia
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>Atual</span>
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-3">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
