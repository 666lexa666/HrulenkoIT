import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              О нас
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Мы специализируемся на консультациях и разработке программного обеспечения, 
                автоматизации процессов и создании телеграм-ботов. Подходим к задачам индивидуально 
                и предлагаем решения, которые реально работают на ваш бизнес.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Индивидуальный подход</h3>
                  <p className="text-gray-600">Каждое решение создается под конкретные задачи вашего бизнеса</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Опытная команда</h3>
                  <p className="text-gray-600">Профессионалы с многолетним опытом в IT-сфере</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Lightbulb className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Инновационные решения</h3>
                  <p className="text-gray-600">Используем современные технологии для достижения лучшего результата</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;