const Footer = () => {
  return (
    <footer className="bg-gradient-hero bg-pattern-qf py-16 border-t border-qf-border relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-qf-sage/5 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-4 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-qf-sage/10 to-qf-sage/5 flex items-center justify-center group-hover:from-qf-sage/20 group-hover:to-qf-sage/10 group-hover:scale-110 transition-all duration-500">
              <div className="text-lg font-display font-bold drop-shadow-sm">
                <span className="text-qf-sage drop-shadow-sm">Q</span><span className="text-qf-text-inverse drop-shadow-sm">F</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-qf-text-inverse font-display font-semibold text-lg leading-tight group-hover:text-qf-sage transition-colors duration-300 drop-shadow-sm">
                <span className="text-qf-text-inverse drop-shadow-sm">Quintaneira</span><span className="text-qf-sage drop-shadow-sm">Ferreira</span>
              </span>
              <span className="text-qf-text-inverse/80 text-xs font-body tracking-[0.15em] uppercase group-hover:text-qf-text-inverse/90 transition-colors duration-300 drop-shadow-sm">
                Advocacia
              </span>
            </div>
          </div>

          {/* Address & Registration */}
          <div className="space-y-3 text-qf-text-inverse/80">
            <p className="text-body-md font-medium">
              <span className="text-qf-sage">Parnamirim/RN</span> • Atendimento presencial e online
            </p>
            <p className="text-body-sm">
              <span className="text-qf-sage font-medium">OAB/RN nº 12.345</span> • Fernando Quintaneira
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-8 text-body-sm">
            <button className="text-qf-text-inverse/60 hover:text-qf-sage transition-all duration-300 hover:scale-105 font-medium">
              Política de Privacidade
            </button>
            <span className="text-qf-text-inverse/40">•</span>
            <button className="text-qf-text-inverse/60 hover:text-qf-sage transition-all duration-300 hover:scale-105 font-medium">
              Termos de Uso
            </button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-qf-text-inverse/10">
            <p className="text-body-sm text-qf-text-inverse/60 leading-relaxed">
              © 2024 <span className="text-qf-sage font-medium">QuintaneiraFerreira Advocacia</span>. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;