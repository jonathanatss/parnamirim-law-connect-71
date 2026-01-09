import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-qf-paper py-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary">Termos de Uso</h1>
          <p className="text-body-md text-qf-deep/80">Última atualização: 03 de setembro de 2025</p>
        </div>

        <div className="prose max-w-none text-qf-deep leading-relaxed">
          <h2 className="font-display text-display-md text-qf-text-primary">1. Termos</h2>
          <p>Ao acessar ao site Quintaneira Ferreira Advocacia, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
          
          <h2 className="font-display text-display-md text-qf-text-primary">2. Uso de Licença</h2>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Quintaneira Ferreira Advocacia, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>
          <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Quintaneira Ferreira Advocacia a qualquer momento.</p>

          <h2 className="font-display text-display-md text-qf-text-primary">3. Isenção de Responsabilidade</h2>
          <p>Os materiais no site da Quintaneira Ferreira Advocacia são fornecidos 'como estão'. O escritório não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
          
          <h2 className="font-display text-display-md text-qf-text-primary">4. Limitações</h2>
          <p>Em nenhum caso o escritório Quintaneira Ferreira Advocacia ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site.</p>
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

export default TermsOfUse;