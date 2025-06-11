
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer id="contato" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Estou sempre aberto a novas oportunidades e projetos interessantes
          </p>
        </div>

        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="pt-8 pb-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
                <p className="text-muted-foreground mb-6">
                  Interessado em colaborar ou tem alguma oportunidade? 
                  Adoraria ouvir de você!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => window.open('mailto:gustavo.castelluccio@exemplo.com', '_blank')}
                >
                  Enviar Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/castellucciogustavo', '_blank')}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 Gustavo Castelluccio da Costa Lima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
