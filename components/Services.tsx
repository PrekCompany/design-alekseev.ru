import React from 'react';
import { PenTool, Smartphone, Zap, Monitor, Box, Layers } from 'lucide-react';
import { ServiceItem } from '../types';
import { useInView } from '../hooks/useInView';

const services: ServiceItem[] = [
  {
    id: '1',
    icon: <PenTool className="w-8 h-8" />,
    title: 'БРЕНДИНГ',
    description: 'Разработка уникального визуального стиля, логотипа и айдентики, которые выделят вас на фоне конкурентов.',
    tags: ['Логотип', 'Brandbook', 'Стиль']
  },
  {
    id: '2',
    icon: <Monitor className="w-8 h-8" />,
    title: 'ВЕБ-ДИЗАЙН',
    description: 'Создание современных, адаптивных и удобных сайтов. От лендингов до корпоративных порталов.',
    tags: ['UX/UI', 'Figma', 'Прототипы']
  },
  {
    id: '3',
    icon: <Box className="w-8 h-8" />,
    title: '3D & MOTION',
    description: 'Создание впечатляющей 3D-графики и анимации. Оживляем интерфейсы и создаем вирусный контент.',
    tags: ['Blender', 'After Effects', 'Spline']
  }
];

const Services: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 relative perspective-1000">
      {/* Define Squircle Clip for Services */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="squircleClipServices" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-10'}`}>
          <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            Наши Услуги
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Комплексные <br />
            <span className="font-serif italic text-gray-400 font-normal">Визуальные Решения</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`transition-all duration-1000 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* NEW FLIP CARD STRUCTURE */}
              <div className="card">
                <div className="content">
                  
                  {/* Initial View (Back in CSS) */}
                  <div className="back">
                    <div className="back-content">
                      {/* Updated Icon Container with Squircle Shape */}
                      <div 
                        className="w-24 h-24 bg-gradient-to-br from-brand-purple to-brand-darkPurple flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(124,58,237,0.5)] z-20 border border-white/20"
                        style={{ clipPath: 'url(#squircleClipServices)' }}
                      >
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <strong className="text-xl font-bold tracking-wider z-20 text-center uppercase">{service.title}</strong>
                      
                      {/* Floating Blobs for Effect */}
                      <div className="circle absolute" id="bottom"></div>
                      <div className="circle absolute" id="right"></div>
                    </div>
                  </div>

                  {/* Hover View (Front in CSS) */}
                  <div className="front">
                    <div className="front-content">
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                         {service.tags.map(tag => (
                           <small key={tag} className="badge">
                             {tag}
                           </small>
                         ))}
                      </div>
                      <div className="description text-center">
                        <div className="title flex justify-center w-full mb-4">
                          <p className="font-bold text-white text-lg">{service.title}</p>
                        </div>
                        <p className="card-footer text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* END FLIP CARD */}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;