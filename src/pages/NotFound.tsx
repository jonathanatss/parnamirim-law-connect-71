import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-qf-paper">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="font-display text-display-lg font-semibold text-qf-text-primary">404</h1>
          <p className="text-body-lg text-qf-deep">Página não encontrada</p>
          <p className="text-body-md text-qf-deep/80">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <Button variant="whatsapp" size="lg" asChild>
          <a href="/">
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
