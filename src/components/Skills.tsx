
import { Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Backend",
      color: "from-blue-500 to-blue-600",
      skills: ["Java 17", "Spring Framework", "Spring Boot", "JUnit", "PMD", "APIs RESTful"]
    },
    {
      category: "Frontend",
      color: "from-purple-500 to-purple-600",
      skills: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap", "JavaScript"]
    },
    {
      category: "Banco de Dados",
      color: "from-green-500 to-green-600",
      skills: ["SQL", "Consultas Avançadas", "Modelagem de Dados", "Manipulação de Dados"]
    },
    {
      category: "DevOps & Ferramentas",
      color: "from-orange-500 to-orange-600",
      skills: ["Git", "GitLab", "CI/CD", "Pipelines", "Versionamento", "DevOps"]
    },
    {
      category: "Metodologias",
      color: "from-teal-500 to-teal-600",
      skills: ["SCRUM", "Kanban", "Metodologias Ágeis", "Sprints", "Entregas Contínuas"]
    },
    {
      category: "Testes",
      color: "from-red-500 to-red-600",
      skills: ["Testes Unitários", "JUnit", "Validações Customizadas", "Qualidade de Código"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stack Tecnológica
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`bg-gradient-to-r ${category.color} p-2 rounded-lg`}>
                    <Code className="text-white" size={20} />
                  </div>
                  <CardTitle className="text-lg">
                    {category.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Code className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Sempre Aprendendo</h3>
              </div>
              <p className="text-muted-foreground">
                Estou constantemente me atualizando com novas tecnologias e melhores práticas 
                no desenvolvimento de software, sempre em busca de evolução contínua.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
