import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'Сколько времени занимает типичный проект?',
    answer:
      'Сроки зависят от объема работ. Брендинг обычно занимает 3–5 недель, дизайн корпоративного сайта — 4–6 недель. Мы предоставляем детальный график перед стартом.',
  },
  {
    question: 'Работаете ли вы со стартапами?',
    answer:
      'Да, мы любим амбициозные стартапы. У нас есть специальные пакеты услуг для создания визуального MVP и презентаций для инвесторов.',
  },
  {
    question: 'Какова ваша модель ценообразования?',
    answer:
      'Мы работаем по проектной ставке (Fixed Price) для четких задач или по Time & Material для долгосрочного дизайн-сопровождения продукта.',
  },
  {
    question: 'Предоставляете ли вы поддержку после сдачи?',
    answer:
      'Безусловно. Мы предлагаем авторский надзор, чтобы убедиться, что верстка соответствует макетам, а также развиваем дизайн по мере роста проекта.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">FAQ</span>
          <h2 className="faq-title">
            Любознательные <br />
            <span>Умы</span>
          </h2>
          <p className="faq-description">
            Есть вопросы? У нас есть ответы. Если вы не нашли нужного —
            свяжитесь с нашей командой.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isActive = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(isActive ? null : index)
                  }
                >
                  <span className="question-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-icon">
                    {isActive ? <Minus /> : <Plus />}
                  </span>
                </button>

                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isActive ? '600px' : '0px',
                  }}
                >
                  <div className="faq-answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
