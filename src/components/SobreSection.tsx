import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, Award, Clock, FileCheck, Sparkles } from "lucide-react";

const SobreSection = () => {
  const diferenciais = [
    { icon: Clock, text: "Respostas rápidas" },
    { icon: FileCheck, text: "Estratégia transparente" },
    { icon: Award, text: "Relatório de andamento" }
  ];

  const faqItems = [
    {
      question: "Tenho direito a horas extras?",
      answer: "Se você trabalha além da jornada normal (8h/dia ou 44h/semana) sem compensação adequada, tem direito às horas extras com adicional de 50% ou 100% nos domingos e feriados. Analisamos seu caso sem custos."
    },
    {
      question: "Posso ajuizar ação ainda empregado?",
      answer: "Sim, é possível ajuizar ação trabalhista mesmo estando empregado, especialmente para questões como horas extras, adicionais e diferenças salariais. A lei protege contra retaliações."
    },
    {
      question: "Prazo para reclamar verbas?",
      answer: "O prazo geral é de 5 anos durante o contrato e 2 anos após o término. Para FGTS, o prazo é de 30 anos. Importante não perder esses prazos para garantir seus direitos."
    },
    {
      question: "Atendem online e presencial?",
      answer: "Sim, atendemos tanto presencialmente em Parnamirim/RN quanto online para todo o Brasil. Consultas iniciais podem ser feitas por WhatsApp ou videoconferência."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-pattern-qf opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-qf-sage/5 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Sobre Fernando */}
        <AnimatedSection animation="fade-in-up">
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in-left" className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-qf-sage animate-glow-pulse" />
                    <h2 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary bg-gradient-to-r from-qf-text-primary to-qf-sage bg-clip-text text-transparent">
                      Fernando Quintaneira
                    </h2>
                  </div>
                  <p className="text-body-lg text-qf-deep leading-relaxed mb-6">
                    Advogado trabalhista com atuação focada em <span className="text-qf-sage font-semibold">evidências</span>, 
                    <span className="text-qf-sage font-semibold"> prazos</span> e <span className="text-qf-sage font-semibold">comunicação clara</span>. 
                    Especializado em direitos do trabalhador e consultoria empresarial, com atendimento 
                    online e presencial em Parnamirim/Natal.
                  </p>
                  <p className="text-body-md text-qf-deep leading-relaxed">
                    Mais de uma década defendendo direitos trabalhistas com 
                    <span className="text-qf-sage font-medium"> estratégias personalizadas</span> e 
                    <span className="text-qf-sage font-medium"> transparência total</span> no processo.
                  </p>
                </div>

                {/* Diferenciais */}
                <div className="space-y-4">
                  {diferenciais.map((diferencial, index) => {
                    const Icon = diferencial.icon;
                    return (
                      <AnimatedSection 
                        key={index}
                        animation="fade-in-left" 
                        delay={index * 150}
                        className="flex items-center space-x-4 group cursor-pointer hover:bg-qf-sage/5 rounded-lg p-3 -mx-3 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-qf-sage/10 to-qf-sage/5 flex items-center justify-center flex-shrink-0 group-hover:from-qf-sage/20 group-hover:to-qf-sage/10 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-5 h-5 text-qf-sage group-hover:animate-float" strokeWidth={1.5} />
                        </div>
                        <span className="text-body-md text-qf-text-primary font-medium group-hover:text-qf-sage transition-colors duration-300">
                          {diferencial.text}
                        </span>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </AnimatedSection>

            {/* Credenciais Card */}
            <AnimatedSection animation="fade-in-right">
              <Card className="elevation-1 hover:elevation-hover border-qf-border/20 bg-gradient-sage-subtle backdrop-blur-sm transition-all duration-500 hover:border-qf-sage/30">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="credenciais" className="border-none">
                      <AccordionTrigger className="text-body-lg font-semibold text-qf-text-primary hover:text-qf-sage transition-colors duration-300 [&>svg]:text-qf-sage">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Credenciais
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 pt-6">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3 group">
                            <Check className="w-5 h-5 text-qf-sage mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                            <span className="text-body-sm text-qf-deep group-hover:text-qf-text-primary transition-colors duration-300">OAB/RN nº 12.345</span>
                          </div>
                          <div className="flex items-start space-x-3 group">
                            <Check className="w-5 h-5 text-qf-sage mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                            <span className="text-body-sm text-qf-deep group-hover:text-qf-text-primary transition-colors duration-300">Bacharel em Direito - UFRN</span>
                          </div>
                          <div className="flex items-start space-x-3 group">
                            <Check className="w-5 h-5 text-qf-sage mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                            <span className="text-body-sm text-qf-deep group-hover:text-qf-text-primary transition-colors duration-300">Pós-graduação em Direito do Trabalho</span>
                          </div>
                          <div className="flex items-start space-x-3 group">
                            <Check className="w-5 h-5 text-qf-sage mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                            <span className="text-body-sm text-qf-deep group-hover:text-qf-text-primary transition-colors duration-300">Membro da Comissão de Direito Trabalhista OAB/RN</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection animation="fade-in-up">
          <div>
            <h3 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary mb-8 text-center bg-gradient-to-r from-qf-text-primary to-qf-sage bg-clip-text text-transparent">
              Perguntas Frequentes
            </h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-in-up"
                  delay={index * 150}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border border-qf-border/20 rounded-xl px-6 elevation-1 hover:elevation-hover bg-white/80 backdrop-blur-sm transition-all duration-500 hover:border-qf-sage/30 group"
                  >
                    <AccordionTrigger className="text-body-lg font-semibold text-qf-text-primary hover:text-qf-sage py-6 transition-colors duration-300 group-hover:[&>svg]:text-qf-sage [&>svg]:transition-colors [&>svg]:duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-body-md text-qf-deep leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SobreSection;