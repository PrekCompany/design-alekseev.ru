import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';
import { useInView } from '../hooks/useInView';

const faqData: FaqItem[] = [
  {
    question: 'Сколько времени занимает типичный проект?',
    answer: 'Сроки зависят от объема работ. Брендинг обычно занимает 3-5 недель, дизайн корпоративного сайта — 4-6 недель. Мы предоставляем детальный график перед стартом.'
  },
  {
    question: 'Работаете ли вы со стартапами?',
    answer: 'Да, мы любим амбициозные стартапы. У нас есть специальные пакеты услуг для создания визуального MVP и презентаций для инвесторов.'
  },
  {
    question: 'Какова ваша модель ценообразования?',
    answer: 'Мы работаем по проектной ставке (Fixed Price) для четких задач или по Time & Material для долгосрочного дизайн-сопровождения продукта.'
  },
  {
    question: 'Предоставляете ли вы поддержку после сдачи?',
    answer: 'Безусловно. Мы предлагаем авторский надзор, чтобы убедиться, что верстка соответствует макетам, а также развиваем дизайн по мере роста проекта.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 border-t border-white/5">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="md:col-span-4">
          <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.2em] block mb-4">FAQ</span>
          <h2 className="text-4xl font-bold mb-4">Любознательные <br /> <span className="font-serif italic font-normal text-gray-400">Умы</span></h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Есть вопросы? У нас есть ответы. Если вы не нашли того, что искали, обратитесь к нашей команде напрямую.
          </p>
        </div>
        
        <div className="md:col-span-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-white/10 pb-4">
                <button 
                  className="w-full flex justify-between items-center py-4 text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {item.question}
                  </span>
                  <span className={`text-brand-purple transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 pb-4 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;