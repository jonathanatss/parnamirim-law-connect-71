import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AtuacaoSection from "@/components/AtuacaoSection";
import MediaCarousel from "@/components/MediaCarousel";
import SobreSection from "@/components/SobreSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <AtuacaoSection />
        <MediaCarousel />
        <SobreSection />
        <ContatoSection />
      </main>
      
      <Footer />
      <StickyMobileCTA />
      
      {/* Add bottom padding for mobile sticky CTA */}
      <div className="h-20 md:h-0" />
    </div>
  );
};

export default Index;
