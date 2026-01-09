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
  const areas = [
    {
      icon: Clock,
      title: "Horas Extras e Intervalos",
      description: "O não pagamento correto de horas extras ou a supressão de intervalos é uma das violações trabalhistas mais comuns. A lei garante ao trabalhador o direito de receber pela jornada excedente e pelo tempo de descanso não respeitado, assegurando a justa compensação pelo esforço prestado.",
    },
    {
      icon: FileText,
      title: "Verbas Rescisórias",
      description: "Na rescisão do contrato, o empregado tem direito a receber corretamente férias, 13º, aviso prévio, FGTS e demais verbas trabalhistas, de acordo com seu tipo de dispensa. A ausência ou pagamento incompleto dessas parcelas enseja a cobrança judicial, garantindo ao trabalhador seus direitos constitucionais.",
    },
    {
      icon: UserCheck,
      title: "Reconhecimento de Vínculo",
      description: "Mesmo sem anotação na CTPS, quando presentes os requisitos da relação de emprego - subordinação, pessoalidade, habitualidade e remuneração - é possível o reconhecimento do vínculo trabalhista. Essa medida garante acesso a todos os direitos e proteções da legislação.",
    },
    {
      icon: AlertTriangle,
      title: "Insalubridade e Periculosidade",
      description: "Atividades exercidas em condições de risco ou em ambientes insalubres asseguram ao trabalhador adicionais específicos em sua remuneração. Quando não pagos, esses valores podem ser exigidos judicialmente, reparando a omissão do empregador.",
    },
    {
      icon: Shield,
      title: "Rescisão Indireta",
      description: "Ocorre quando a empresa descumpre de forma grave suas obrigações contratuais, tornando impossível a continuidade do vínculo. Nesses casos, o trabalhador pode encerrar o contrato e ainda assim receber todas as verbas de uma demissão sem justa causa.",
    },
    {
      icon: Building,
      title: "Consultoria para Empresas",
      description: "A atuação preventiva no âmbito trabalhista é essencial para reduzir riscos e evitar passivos. Por meio de análise estratégica e adequação das práticas empresariais à legislação, é possível garantir segurança jurídica e maior eficiência na gestão de pessoas.",
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
            <h2 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary mb-6">
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
                  
                  <CardContent className="pt-0 flex-1">
                    <CardDescription className="text-body-md text-qf-deep leading-relaxed">
                      {area.description}
                    </CardDescription>
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