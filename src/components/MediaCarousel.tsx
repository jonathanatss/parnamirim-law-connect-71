import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
}

const MediaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Placeholder media items - you'll replace these with actual content
  const mediaItems: MediaItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/placeholder-lawyer-1.jpg',
      title: 'Audiência no Tribunal',
      description: 'Defendendo direitos trabalhistas em audiência no TRT'
    },
    {
      id: '2',
      type: 'video',
      src: '/placeholder-video-1.mp4',
      thumbnail: '/placeholder-video-thumb-1.jpg',
      title: 'Consultoria Empresarial',
      description: 'Orientação sobre compliance trabalhista'
    },
    {
      id: '3',
      type: 'image',
      src: '/placeholder-lawyer-2.jpg',
      title: 'Escritório de Advocacia',
      description: 'Atendimento personalizado aos clientes'
    },
    {
      id: '4',
      type: 'video',
      src: '/placeholder-video-2.mp4',
      thumbnail: '/placeholder-video-thumb-2.jpg',
      title: 'Palestra Direito Trabalhista',
      description: 'Educação sobre direitos dos trabalhadores'
    },
    {
      id: '5',
      type: 'image',
      src: '/placeholder-lawyer-3.jpg',
      title: 'Negociação Empresarial',
      description: 'Mediação em conflitos trabalhistas'
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gradient-paper-elegant bg-pattern-qf relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-qf-sage/5 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-qf-sage/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-md lg:text-4xl font-semibold text-qf-text-primary mb-6">
              Atuação em Campo
            </h2>
            <p className="text-body-lg text-qf-deep max-w-2xl mx-auto leading-relaxed">
              Conheça nosso trabalho através de imagens e vídeos da nossa 
              <span className="text-qf-sage font-semibold"> atuação profissional</span> na área do direito trabalhista
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale-in" delay={200}>
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {mediaItems.map((item, index) => (
                  <div key={item.id} className="flex-[0_0_100%] min-w-0 px-4">
                    <Card className="elevation-1 hover:elevation-hover border-qf-border/20 bg-gradient-sage-subtle backdrop-blur-sm transition-all duration-500 hover:border-qf-sage/40">
                      <CardContent className="p-0">
                        <div className="relative aspect-video rounded-t-xl overflow-hidden bg-qf-ink/5">
                          {item.type === 'image' ? (
                            <div className="w-full h-full bg-gradient-to-br from-qf-sage/10 to-qf-ink/10 flex items-center justify-center group">
                              <ImageIcon className="w-16 h-16 text-qf-sage/40 group-hover:text-qf-sage/60 transition-colors duration-300" />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-qf-text-inverse font-medium">Clique para ampliar</span>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-qf-ink/10 to-qf-sage/10 flex items-center justify-center group cursor-pointer">
                              <div className="relative">
                                <div className="w-20 h-20 rounded-full bg-qf-sage/80 flex items-center justify-center group-hover:bg-qf-sage group-hover:scale-110 transition-all duration-300">
                                  <Play className="w-8 h-8 text-qf-text-inverse ml-1" fill="currentColor" />
                                </div>
                                <div className="absolute -inset-2 rounded-full bg-qf-sage/20 animate-pulse"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <h3 className="font-display text-lg font-semibold text-qf-text-primary mb-2 group-hover:text-qf-sage transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-body-md text-qf-deep leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-qf-paper/50 backdrop-blur-sm border-qf-border/20 hover:bg-qf-sage hover:border-qf-sage text-qf-deep hover:text-qf-text-inverse"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-qf-paper/50 backdrop-blur-sm border-qf-border/20 hover:bg-qf-sage hover:border-qf-sage text-qf-deep hover:text-qf-text-inverse"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-qf-sage scale-125'
                      : 'bg-qf-deep/30 hover:bg-qf-deep/50'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MediaCarousel;