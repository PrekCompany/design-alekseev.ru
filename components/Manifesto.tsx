import React from 'react';
import { useInView } from '../hooks/useInView';

const Manifesto: React.FC = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 bg-brand-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`mb-12 text-brand-purple text-xs font-bold uppercase tracking-[0.2em] transition-all duration-1000 ${isInView ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-10'}`}>
          Наш Подход
        </div>
        
        <div className="text-3xl md:text-6xl font-bold leading-tight">
          <div className={`flex flex-col md:flex-row gap-8 md:items-center transition-all duration-1000 delay-100 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">МЫ СОЗДАЕМ</span>
            <span className="text-sm md:text-lg font-normal text-gray-400 max-w-md leading-relaxed border-l-2 border-brand-purple pl-6">
              Мы верим, что дизайн должен быть не просто красивым, но и функциональным. Каждая деталь имеет значение и работает на результат вашего бизнеса.
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
             <div className={`p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-1000 delay-300 hover:bg-white/10 hover:border-brand-purple/30 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <h3 className="text-xl font-bold mb-2 text-white">Стратегия</h3>
                <p className="text-gray-400 text-sm">Глубокий анализ рынка и конкурентов перед тем, как нарисовать первый пиксель.</p>
             </div>
             
             <div className={`p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-1000 delay-500 hover:bg-white/10 hover:border-brand-purple/30 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <h3 className="text-xl font-bold mb-2 text-brand-neon">Реализация</h3>
                <p className="text-gray-400 text-sm">Создание детализированных дизайн-систем и интерактивных прототипов. Мы передаем разработчикам идеальные макеты.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;