import React from 'react';
import { Monitor, Settings, Bot, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: 'Разработка ПО',
      description: 'Создание веб- и десктопных приложений под ваши задачи',
      features: ['Веб-приложения', 'Десктопные решения', 'API и интеграции', 'Базы данных']
    },
    {
      icon: <Settings size={32} />,
      title: 'Доработка и поддержка',
      description: 'Улучшение и сопровождение уже существующих решений',
      features: ['Рефакторинг кода', 'Оптимизация', 'Исправление ошибок', 'Техподдержка']
    },
    {
      icon: <Bot size={32} />,
      title: 'Telegram-боты',
      description: 'Чат-боты любой сложности, интеграции с CRM и сервисами',
      features: ['Чат-боты', 'CRM интеграции', 'Автоматизация', 'Аналитика']
    },
    {
      icon: <Users size={32} />,
      title: 'IT-консалтинг',
      description: 'Аудит, оптимизация и внедрение решений для бизнеса',
      features: ['IT-аудит', 'Архитектура', 'Консультации', 'Внедрение']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр IT-услуг для развития вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;