
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gustavo Castelluccio
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("experiencia")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection("formacao")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Formação
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("idiomas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Idiomas
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("experiencia")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection("formacao")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Formação
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("idiomas")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Idiomas
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
