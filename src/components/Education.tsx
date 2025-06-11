
import { Book, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  return (
    <section id="formacao" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-muted-foreground">
            Minha base educacional em tecnologia
          </p>
        </div>

        <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-lg">
                  <Book className="text-white" size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl">
                    Engenharia de Software
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-medium">
                    Universidade Católica do Salvador (UCSAL)
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>2026.2</span>
                </Badge>
                <Badge variant="secondary">
                  6º Semestre
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Status do Curso:
              </p>
              <p className="text-base">
                Atualmente cursando o 6º semestre, com conclusão prevista para 2026.2. 
                Focando em desenvolvimento de software, arquitetura de sistemas, 
                metodologias ágeis e tecnologias modernas.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
