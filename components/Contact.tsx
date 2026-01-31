import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a0529] -z-10"></div>
      
      {/* SVG Definitions for Squircle */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>

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

          <div className="space-y-6 mb-12">
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

          {/* Social Media Dock */}
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>

             <div className="relative flex items-end gap-x-2 p-2">
               {/* TikTok (Gray) */}
               <div className="relative group">
                 <a href="#" className="block">
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                      </svg>
                    </div>
                 </a>
               </div>

               {/* Telegram (Blue) */}
               <div className="relative group">
                 <a href="#" className="block">
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg">
                         <path d="M22.9 2.3c-.6-.6-1.5-.7-2.3-.4L2.5 9.1c-1 .4-1 .9-1 1.3 0 .4.5.8 1.4 1.1l4.9 1.6 1.7 5.6c.2.6.5.7 1 .7.4 0 .6-.2.8-.4l2.4-2.4 5 3.7c.9.5 1.7.3 1.9-.8l3.4-16.1c.1-.6-.2-1.3-.7-1.8zm-9.3 12.3-1.6-1.6 8.5-7.7-10.6 6.6-.7-2.3 13.5-5.3-2.9 13.9-6.2-3.6z"/>
                      </svg>
                    </div>
                 </a>
               </div>

               {/* YouTube (Red) */}
               <div className="relative group">
                 <a href="#" className="block">
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                      </svg>
                    </div>
                 </a>
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