import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    mensagem: "",
    lgpd: false
  });
  const { toast } = useToast();

  const whatsappLink = "https://wa.me/5584999999999?text=Olá,%20gostaria%20de%20falar%20sobre%20direito%20trabalhista";
  const whatsappQR = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(whatsappLink);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpd) {
      toast({
        title: "Consentimento necessário",
        description: "É necessário aceitar os termos de privacidade para prosseguir.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve pelo WhatsApp informado.",
    });

    // Reset form
    setFormData({ nome: "", whatsapp: "", mensagem: "", lgpd: false });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-paper-elegant bg-pattern-qf relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-qf-sage/3 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-qf-ink/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-qf-sage animate-glow-pulse" />
              <h2 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary bg-gradient-to-r from-qf-text-primary to-qf-sage bg-clip-text text-transparent">
                Entre em Contato
              </h2>
            </div>
            <p className="text-body-lg text-qf-deep max-w-2xl mx-auto leading-relaxed">
              Atendimento em <span className="text-qf-sage font-semibold">Parnamirim/RN</span> e 
              <span className="text-qf-sage font-semibold"> online</span>. Horário comercial de segunda a sexta.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* WhatsApp CTA + QR Code */}
          <AnimatedSection animation="fade-in-left" className="space-y-8">
            <Card className="elevation-1 hover:elevation-hover border-qf-sage/20 bg-gradient-sage-subtle backdrop-blur-sm transition-all duration-500 hover:border-qf-sage/30">
              <CardContent className="p-8 text-center space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-6 h-6 text-qf-sage animate-glow-pulse" />
                    <h3 className="font-display text-xl font-semibold text-qf-text-primary">
                      Fale Conosco Agora
                    </h3>
                  </div>
                  <p className="text-body-md text-qf-deep">
                    <span className="text-qf-sage font-semibold">Resposta rápida</span> pelo WhatsApp
                  </p>
                </div>

                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  asChild 
                  className="w-full group hover:elevation-sage hover:-translate-y-0.5 transition-all duration-300"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp agora
                    <Phone className="ml-2 h-4 w-4 group-hover:scale-110 group-hover:animate-float transition-all duration-300" />
                  </a>
                </Button>

                <div className="pt-6 border-t border-qf-border/20">
                  <p className="text-body-sm text-qf-deep mb-4 font-medium">Ou escaneie o QR Code:</p>
                  <div className="flex justify-center">
                    <div className="p-3 bg-white rounded-xl elevation-1 hover:elevation-hover transition-all duration-300 hover:scale-105">
                      <img 
                        src={whatsappQR} 
                        alt="QR Code WhatsApp" 
                        className="w-32 h-32 rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="flex items-start space-x-4 group cursor-pointer hover:bg-qf-sage/5 rounded-lg p-4 -mx-4 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-qf-sage/10 to-qf-sage/5 flex items-center justify-center flex-shrink-0 group-hover:from-qf-sage/20 group-hover:to-qf-sage/10 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-qf-sage group-hover:animate-float" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-body-md text-qf-text-primary font-semibold group-hover:text-qf-sage transition-colors duration-300">Endereço</p>
                    <p className="text-body-sm text-qf-deep leading-relaxed">Parnamirim/RN • Atendimento presencial e online</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-left" delay={400}>
                <div className="flex items-start space-x-4 group cursor-pointer hover:bg-qf-sage/5 rounded-lg p-4 -mx-4 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-qf-sage/10 to-qf-sage/5 flex items-center justify-center flex-shrink-0 group-hover:from-qf-sage/20 group-hover:to-qf-sage/10 group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-6 h-6 text-qf-sage group-hover:animate-float" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-body-md text-qf-text-primary font-semibold group-hover:text-qf-sage transition-colors duration-300">Horário</p>
                    <p className="text-body-sm text-qf-deep leading-relaxed">Segunda a Sexta: <span className="text-qf-sage font-medium">8h às 18h</span></p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-in-right">
            <Card className="elevation-1 hover:elevation-hover border-qf-border/20 bg-gradient-sage-subtle backdrop-blur-sm transition-all duration-500 hover:border-qf-sage/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Send className="w-5 h-5 text-qf-sage" />
                  <h3 className="font-display text-lg font-semibold text-qf-text-primary">
                    Envie sua mensagem
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-5">
                    <div className="group">
                      <Label htmlFor="nome" className="text-body-md font-medium text-qf-text-primary group-hover:text-qf-sage transition-colors duration-300">
                        Nome completo *
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        required
                        className="mt-2 border-qf-border/30 focus:border-qf-sage hover:border-qf-sage/50 transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="whatsapp" className="text-body-md font-medium text-qf-text-primary group-hover:text-qf-sage transition-colors duration-300">
                        WhatsApp *
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        required
                        className="mt-2 border-qf-border/30 focus:border-qf-sage hover:border-qf-sage/50 transition-all duration-300"
                        placeholder="(84) 99999-9999"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="mensagem" className="text-body-md font-medium text-qf-text-primary group-hover:text-qf-sage transition-colors duration-300">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        required
                        rows={4}
                        className="mt-2 border-qf-border/30 focus:border-qf-sage hover:border-qf-sage/50 resize-none transition-all duration-300"
                        placeholder="Descreva brevemente sua situação ou dúvida sobre direito trabalhista..."
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 group">
                    <Checkbox
                      id="lgpd"
                      checked={formData.lgpd}
                      onCheckedChange={(checked) => handleInputChange('lgpd', checked as boolean)}
                      className="mt-1 data-[state=checked]:bg-qf-sage border-qf-sage/50"
                    />
                    <Label htmlFor="lgpd" className="text-body-sm text-qf-deep leading-relaxed cursor-pointer group-hover:text-qf-text-primary transition-colors duration-300">
                      Seus dados serão usados apenas para retorno do contato. Concordo com o tratamento dos meus dados pessoais conforme a 
                      <span className="text-qf-sage font-medium"> LGPD</span>.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="whatsapp" 
                    size="lg" 
                    className="w-full group hover:elevation-sage hover:-translate-y-0.5 transition-all duration-300"
                    disabled={!formData.nome || !formData.whatsapp || !formData.mensagem || !formData.lgpd}
                  >
                    Enviar mensagem
                    <Mail className="ml-2 h-4 w-4 group-hover:animate-float transition-all duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;