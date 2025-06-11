
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Languages = () => {
  return (
    <section id="idiomas" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Idiomas
          </h2>
          <p className="text-lg text-muted-foreground">
            Habilidades linguísticas e experiência internacional
          </p>
        </div>

        <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  EN
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl">
                    Inglês
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-medium">
                    ILAC International Language Academy of Canada
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                Avançado
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Experiência Internacional:
              </p>
              <p className="text-base">
                Intercâmbio no ano de 2020 para estudo e aperfeiçoamento na ILAC International 
                Language Academy of Canada, localizada em Vancouver. Esta experiência proporcionou 
                fluência avançada no idioma e vivência em ambiente multicultural internacional.
              </p>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline">Fluência Conversacional</Badge>
              <Badge variant="outline">Leitura Técnica</Badge>
              <Badge variant="outline">Escrita Profissional</Badge>
              <Badge variant="outline">Experiência Internacional</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
