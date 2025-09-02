import { useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in";
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in-up",
  delay = 0 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(elementRef);

    return () => observer.disconnect();
  }, [elementRef, delay]);

  return (
    <div
      ref={setElementRef}
      className={`transition-all duration-700 ${
        isVisible 
          ? `animate-${animation} opacity-100` 
          : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;