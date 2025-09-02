import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const whatsappLink = "https://wa.me/5584999999999?text=Olá,%20gostaria%20de%20falar%20sobre%20direito%20trabalhista";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-qf-ink/95 backdrop-blur-sm border-b border-qf-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-qf-sage/10 flex items-center justify-center">
              <div className="text-lg font-display font-bold drop-shadow-sm">
                <span className="text-qf-sage drop-shadow-sm">Q</span><span className="text-qf-text-inverse drop-shadow-sm">F</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-qf-text-inverse font-display font-semibold text-sm leading-tight drop-shadow-sm">
                <span className="text-qf-text-inverse drop-shadow-sm">Quintaneira</span><span className="text-qf-sage drop-shadow-sm">Ferreira</span>
              </span>
              <span className="text-qf-text-inverse/80 text-xs font-body tracking-wide uppercase drop-shadow-sm">
                Advocacia
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('atuacao')}
            className="text-qf-text-inverse hover:text-qf-sage transition-smooth text-body-md"
          >
            Atuação
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-qf-text-inverse hover:text-qf-sage transition-smooth text-body-md"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-qf-text-inverse hover:text-qf-sage transition-smooth text-body-md"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="whatsapp" 
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-qf-ink border-b border-qf-border md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('atuacao')}
                className="text-qf-text-inverse hover:text-qf-sage transition-smooth text-left"
              >
                Atuação
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-qf-text-inverse hover:text-qf-sage transition-smooth text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-qf-text-inverse hover:text-qf-sage transition-smooth text-left"
              >
                Contato
              </button>
              <Button 
                variant="whatsapp" 
                size="sm" 
                asChild 
                className="w-full mt-4 sm:hidden"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;