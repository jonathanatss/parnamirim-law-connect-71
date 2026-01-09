import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-qf-paper py-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary">Política de Privacidade</h1>
          <p className="text-body-md text-qf-deep/80">Última atualização: 03 de setembro de 2025</p>
        </div>

        <div className="prose max-w-none text-qf-deep leading-relaxed">
          <p>A sua privacidade é importante para nós. É política do escritório Quintaneira Ferreira Advocacia respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>
          
          <h2 className="font-display text-display-md text-qf-text-primary">1. Coleta de Dados</h2>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          <p>Quando você preenche o formulário de contato, coletamos seu nome, número de WhatsApp e a mensagem que você nos envia. Estes dados são utilizados exclusivamente para entrar em contato com você e responder à sua solicitação.</p>

          <h2 className="font-display text-display-md text-qf-text-primary">2. Uso dos Dados</h2>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

          <h2 className="font-display text-display-md text-qf-text-primary">3. Links Externos</h2>
          <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

          <h2 className="font-display text-display-md text-qf-text-primary">4. Consentimento</h2>
          <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
        </div>

        <div className="text-center pt-8">
          <Button variant="outline" asChild>
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Voltar ao Início
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;