import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyMobileCTA = () => {
  const isMobile = useIsMobile();
  const whatsappLink = "https://wa.me/5584999999999?text=Olá,%20gostaria%20de%20falar%20sobre%20direito%20trabalhista";

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-qf-ink border-t border-qf-border p-4 md:hidden">
      <Button 
        variant="whatsapp" 
        size="lg" 
        asChild 
        className="w-full group"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Falar no WhatsApp
        </a>
      </Button>
    </div>
  );
};

export default StickyMobileCTA;