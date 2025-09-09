import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:aleksejhrulenko71@gmail.com"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                aleksejhrulenko71@gmail.com
              </a>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Первомайский переулок, 39А,<br />
                село Андреево-Мелентьево,<br />
                Неклиновский район,<br />
                Ростовская область, 346841
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;