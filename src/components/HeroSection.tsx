import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5584999999999?text=Olá,%20gostaria%20de%20falar%20sobre%20direito%20trabalhista";

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] bg-gradient-hero bg-pattern-qf flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-qf-sage/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-qf-sage/3 rounded-full blur-2xl animate-glow-pulse"></div>
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-6xl relative z-10">
        {/* Content */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="space-y-6">
            <h1 className="font-display text-display-lg lg:text-6xl font-semibold text-qf-text-inverse text-balance leading-tight">
              <span className="inline-block animate-fade-in-up">Direito do Trabalho.</span>
              <span className="block text-qf-sage bg-gradient-to-r from-qf-sage to-qf-sage-700 bg-clip-text text-transparent animate-fade-in-up [animation-delay:200ms]">
                Essencial e eficaz.
              </span>
            </h1>
            
            <p className="text-body-lg text-qf-text-inverse/90 max-w-lg text-balance leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              Atuação estratégica para trabalhadores e empresas em Parnamirim/RN com 
              <span className="text-qf-sage font-medium"> transparência total</span> e 
              <span className="text-qf-sage font-medium"> resultados concretos</span>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up [animation-delay:600ms]">
            <Button 
              variant="whatsapp" 
              size="lg"
              asChild
              className="group hover:elevation-sage hover:-translate-y-0.5 transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline-inverse" 
              size="lg"
              onClick={scrollToContact}
              className="group hover:elevation-1 hover:-translate-y-0.5 transition-all duration-300 hover:bg-qf-sage hover:border-qf-sage hover:text-qf-text-inverse"
            >
              Enviar mensagem
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Brand Element */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative group animate-scale-in [animation-delay:800ms]">
            {/* Main QF Logo */}
            <div className="relative z-10 bg-gradient-sage-subtle backdrop-blur-sm rounded-3xl p-12 border border-qf-sage/20 hover:border-qf-sage/40 transition-all duration-500 group-hover:elevation-sage">
              <div className="text-center space-y-6">
                {/* QF Monogram - Q verde, F azul */}
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-qf-sage/10 to-qf-sage/5 flex items-center justify-center border border-qf-sage/30 group-hover:border-qf-sage/50 transition-all duration-500 hover:scale-105">
                  <div className="text-6xl font-display font-bold tracking-tighter group-hover:animate-float">
                    <span className="text-qf-sage drop-shadow-sm">Q</span><span className="text-qf-ink drop-shadow-sm">F</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {/* Nome completo com cores diferenciadas */}
                  <h3 className="font-display text-xl font-semibold tracking-tight group-hover:text-qf-sage transition-colors duration-300">
                    <span className="text-qf-text-inverse">Quintaneira</span><span className="text-qf-sage">Ferreira</span>
                  </h3>
                  <p className="text-qf-text-inverse/70 text-sm font-body tracking-[0.2em] uppercase group-hover:text-qf-text-inverse/90 transition-colors duration-300">
                    Advocacia
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced background glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-qf-sage/10 via-qf-sage/5 to-transparent rounded-full blur-2xl -z-10 group-hover:from-qf-sage/20 group-hover:via-qf-sage/10 transition-all duration-700 animate-glow-pulse"></div>
            <div className="absolute -inset-12 bg-gradient-to-br from-qf-sage/5 to-transparent rounded-full blur-3xl -z-20 group-hover:from-qf-sage/10 transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;