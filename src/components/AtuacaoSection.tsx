import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Clock, 
  FileText, 
  UserCheck, 
  AlertTriangle, 
  Shield, 
  Building 
} from "lucide-react";

const AtuacaoSection = () => {
  const whatsappLink = "https://wa.me/5584999999999";

  const areas = [
    {
      icon: Clock,
      title: "Horas Extras e Intervalos",
      description: "Cobrança de horas extras não pagas e intervalos suprimidos com cálculo preciso.",
      whatsapp: `${whatsappLink}?text=Gostaria%20de%20falar%20sobre%20horas%20extras%20e%20intervalos`
    },
    {
      icon: FileText,
      title: "Verbas Rescisórias",
      description: "Revisão e cobrança de verbas rescisórias, FGTS, seguro-desemprego e multas.",
      whatsapp: `${whatsappLink}?text=Preciso%20de%20ajuda%20com%20verbas%20rescisórias`
    },
    {
      icon: UserCheck,
      title: "Reconhecimento de Vínculo",
      description: "Transformação de contratos PJ/MEI em vínculo empregatício com direitos garantidos.",
      whatsapp: `${whatsappLink}?text=Gostaria%20de%20falar%20sobre%20reconhecimento%20de%20vínculo`
    },
    {
      icon: AlertTriangle,
      title: "Insalubridade e Periculosidade",
      description: "Perícia e cobrança de adicionais por exposição a agentes nocivos à saúde.",
      whatsapp: `${whatsappLink}?text=Preciso%20de%20ajuda%20com%20insalubridade%20ou%20periculosidade`
    },
    {
      icon: Shield,
      title: "Assédio Moral/Sexual",
      description: "Defesa contra assédio no ambiente de trabalho com indenização adequada.",
      whatsapp: `${whatsappLink}?text=Gostaria%20de%20relatar%20um%20caso%20de%20assédio`
    },
    {
      icon: Building,
      title: "Consultoria para Empresas",
      description: "Auditoria trabalhista, defesa em ações e políticas de compliance.",
      whatsapp: `${whatsappLink}?text=Empresa%20interessada%20em%20consultoria%20trabalhista`
    }
  ];

  return (
    <section id="atuacao" className="py-20 bg-gradient-paper-elegant bg-pattern-qf relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-qf-sage/2 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-qf-ink/3 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary mb-6 bg-gradient-to-r from-qf-text-primary to-qf-deep bg-clip-text text-transparent">
              Áreas de Atuação
            </h2>
            <p className="text-body-lg text-qf-deep max-w-2xl mx-auto leading-relaxed">
              Especialização em <span className="text-qf-sage font-semibold">direito trabalhista</span> com foco em 
              <span className="text-qf-sage font-semibold"> resultados concretos</span> e transparência total
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="fade-in-up"
                delay={index * 100}
                className="h-full"
              >
                <Card className="group hover:border-qf-sage/50 transition-all duration-500 elevation-1 hover:elevation-hover bg-white/80 backdrop-blur-sm border-qf-border/20 h-full flex flex-col hover:-translate-y-1">
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-qf-sage/10 to-qf-sage/5 flex items-center justify-center mb-4 group-hover:from-qf-sage/20 group-hover:to-qf-sage/10 transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-qf-sage group-hover:animate-float" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-body-lg font-semibold text-qf-text-primary group-hover:text-qf-sage transition-colors duration-300">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <CardDescription className="text-body-md text-qf-deep mb-6 leading-relaxed flex-1">
                      {area.description}
                    </CardDescription>
                    
                    <Button 
                      variant="link" 
                      size="sm" 
                      asChild
                      className="p-0 h-auto text-qf-sage group-hover:text-qf-sage-700 font-semibold self-start hover:gap-3 transition-all duration-300"
                    >
                      <a href={area.whatsapp} target="_blank" rel="noopener noreferrer">
                        Falar no WhatsApp →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AtuacaoSection;