import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a0529] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text */}
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Контакты
          </span>
          <h2 className="text-5xl md:text-6xl font-bold uppercase leading-none mb-6">
            Ваш проект <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">
              Следующий?
            </span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-md">
            Открыт для новых вызовов. Оставьте заявку или напишите напрямую, чтобы обсудить детали вашего будущего сайта.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group cursor-pointer">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-purple transition-colors duration-300">
                 <span className="text-lg">📧</span>
               </div>
               <div>
                 <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                 <a href="mailto:hello@design-alekseev.ru" className="text-white group-hover:text-brand-neon transition-colors font-medium">
                   hello@design-alekseev.ru
                 </a>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-purple transition-colors duration-300">
                 <span className="text-lg">📱</span>
               </div>
               <div>
                 <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Telegram / WhatsApp</p>
                 <p className="text-white font-medium">+7 (999) 000-00-00</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Simple Form */}
        <div className={`relative transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-brand-purple/10 backdrop-blur-xl border border-brand-purple/30 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(124,58,237,0.15)] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-neon/30 transition-all duration-700"></div>
             
             <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2 relative z-10">
               ОБСУДИТЬ ЗАДАЧУ
             </h3>

             <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ваше Имя</label>
                   <input type="text" placeholder="Алексей" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email / Telegram</label>
                   <input type="text" placeholder="@username" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all" />
                 </div>
               </div>

               <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">О проекте</label>
                  <textarea 
                    rows={3} 
                    placeholder="Краткое описание задачи..." 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none resize-none transition-all" 
                  />
               </div>

               <button className="w-full bg-white text-black font-bold py-4 rounded-xl mt-4 hover:bg-brand-neon transition-colors flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                 ОТПРАВИТЬ
                 <div className="bg-black/10 rounded-full p-1 group-hover/btn:bg-white/20 transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                 </div>
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;