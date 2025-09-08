import React from 'react';
import { ArrowRight, Code, Bot } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 bg-blue-100 rounded-full">
              <Code className="text-blue-600" size={32} />
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Bot className="text-blue-600" size={32} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Разработка и доработка ПО.
            <span className="text-blue-600 block">Создание Telegram-ботов</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Индивидуальные IT-решения для бизнеса — от консультации до внедрения
          </p>
          
          <button
            onClick={() => scrollToSection('consultation')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Оставить заявку
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;