import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] bg-gradient-paper-elegant bg-pattern-qf flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-qf-sage/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-qf-sage/3 rounded-full blur-2xl animate-glow-pulse"></div>
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-6xl relative z-10">
        {/* Content */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="space-y-6">
            <h1 className="font-display text-display-lg lg:text-6xl font-semibold text-qf-text-primary text-balance leading-tight">
              <span className="inline-block animate-fade-in-up text-qf-text-primary drop-shadow-sm">Direito do Trabalho.</span>
              <span className="block text-qf-sage bg-gradient-to-r from-qf-sage to-qf-sage-700 bg-clip-text text-transparent animate-fade-in-up [animation-delay:200ms] drop-shadow-sm">
                Essencial e eficaz.
              </span>
            </h1>
            
            <p className="text-body-lg text-qf-deep max-w-lg text-balance leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              Atuação estratégica para trabalhadores e empresas em Parnamirim/RN com 
              <span className="text-qf-sage font-medium"> transparência total</span> e 
              <span className="text-qf-sage font-medium"> resultados concretos</span>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up [animation-delay:600ms]">
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="group hover:elevation-1 hover:-translate-y-0.5 transition-all duration-300"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Attorney Photo */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative group animate-scale-in [animation-delay:800ms]">
            <div className="relative z-10 bg-gradient-sage-subtle backdrop-blur-sm rounded-3xl p-4 border border-qf-sage/20 hover:border-qf-sage/40 transition-all duration-500 group-hover:elevation-sage">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-qf-sage/30 group-hover:border-qf-sage/50 transition-all duration-500">
                <img 
                  src="/fernando-quintaneira-advogado.jpg" 
                  alt="Fernando Quintaneira - Advogado" 
                  className="w-full h-full object-cover object-top -translate-y-6 lg:-translate-y-8 filter grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-qf-ink/80 to-transparent p-4 text-center">
                  <h3 className="font-display text-xl font-semibold text-qf-text-inverse drop-shadow-sm">
                    Fernando Quintaneira
                  </h3>
                  <p className="text-qf-text-inverse/90 text-sm font-body tracking-wide uppercase drop-shadow-sm">
                    Advogado Trabalhista
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