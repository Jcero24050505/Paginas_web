import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface Step {
  id: number;
  title: string;
  icon: string;
  description: string;
}

const steps = [
  { id: 1, text: 'Investiga las diferentes opciones', image: 'https://alcgestionretail.com/wp-content/uploads/2016/08/process-1-1.jpg' },
  { id: 2, text: 'Solicita información', image: 'https://alcgestionretail.com/wp-content/uploads/2016/08/process-2-1.jpg' },
  { id: 3, text: 'Prueba para estar seguro', image: 'https://alcgestionretail.com/wp-content/uploads/2016/08/process-3-1.jpg' },
  { id: 4, text: 'Disfruta de tu coche nuevo', image: 'https://alcgestionretail.com/wp-content/uploads/2016/08/process-4-1.jpg' },
];

const PurchaseProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const bubblesRef = useRef<(HTMLDivElement | null)[]>([]);
  const animeTimelineRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    const currentPath = pathRef.current;
    if (!sectionRef.current || !currentPath || !(currentPath instanceof SVGPathElement)) {
        console.warn("SVG Path element not found or not an SVGPathElement for animation setup.");
        return;
    }

    const pathLength = currentPath.getTotalLength();
    currentPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    currentPath.style.strokeDashoffset = String(pathLength);

    animeTimelineRef.current = anime.timeline({
      autoplay: false,
      easing: 'easeInOutQuad'
    });

    animeTimelineRef.current.add({
      targets: currentPath,
      strokeDashoffset: [pathLength, 0],
      duration: 1000,
      delay: 0,
    }, 0);

    bubblesRef.current.forEach((bubble, index) => {
      if (bubble) {
        animeTimelineRef.current?.add({
          targets: bubble,
          opacity: [0, 1],
          scale: [0.5, 1],
          translateY: [20, 0],
          easing: 'easeOutElastic(1, .8)',
          duration: 600,
          offset: (index * 250) + 100
        });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
          } else {
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(sectionRef.current);

    const handleScroll = () => {
      if (!sectionRef.current || !animeTimelineRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // --- MODIFICACIÓN AQUÍ ---
      // Calcular el progreso del scroll dentro de la sección
      // La animación comienza cuando la parte superior de la sección entra en vista
      const scrollStart = sectionTop - windowHeight;

      // La animación termina *mucho más tarde*, extendiéndose por debajo de la sección.
      // Puedes ajustar este multiplicador (ej. 1.5, 2, 3) para hacer la animación más larga.
      // Un valor de 2 significa que la animación se despliega a lo largo de la altura de la sección
      // más una altura de ventana adicional.
      const scrollEnd = sectionTop + sectionHeight + (windowHeight * 1.5); // Extendemos el rango de scroll

      // También puedes hacer que la animación dure X veces la altura de la pantalla
      // const scrollRangeMultiplier = 2.5; // La animación durará 2.5 alturas de ventana
      // const scrollStart = sectionTop - windowHeight;
      // const scrollEnd = sectionTop + (windowHeight * scrollRangeMultiplier);


      const scrollRange = scrollEnd - scrollStart;
      let progress = (scrollTop - scrollStart) / scrollRange;
      progress = Math.max(0, Math.min(1, progress)); // Clampa el progreso entre 0 y 1

      if (animeTimelineRef.current) {
        animeTimelineRef.current.seek(animeTimelineRef.current.duration * progress);
      }
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (animeTimelineRef.current) {
        animeTimelineRef.current.pause();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="purchase-process-section">
      <h2 className="process-title">¿Cuál es el proceso para comprar un coche en ALC Retail?</h2>

      <div className="process-container">
        {/* SVG para el camino */}
        {/* Ajusta el viewBox y la 'd' del path según si es horizontal o vertical */}
        {/* Este 'd' es para un camino horizontal. Para vertical, necesitarías algo como "Mxx,yy Lxx,yy Lxx,yy" */}
        <svg className="process-path-svg" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path
            ref={pathRef}
            d="M50,100 L250,100 L500,100 L750,100 L950,100"
            fill="none"
            stroke="#d3d3d3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="0"
          />
        </svg>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (bubblesRef.current[index] = el)}
              className="process-step-bubble"
              style={{ opacity: 0, transform: 'translateY(20px) scale(0.5)' }}
            >
              <div className="step-number">{step.id}</div>
              <img src={step.image} alt={`Paso ${step.id}`} className="step-image" />
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurchaseProcess;