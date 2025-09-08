import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
    if (!formData.email.trim()) newErrors.email = 'Email обязателен';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Некорректный email';
    if (!formData.message.trim()) newErrors.message = 'Опишите задачу';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь будет отправка формы
      console.log('Форма отправлена:', formData);
      setIsSubmitted(true);
      
      // Сброс формы через 3 секунды
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <section id="consultation" className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-2xl shadow-2xl">
              <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-lg text-gray-600">
                Мы свяжемся с вами в ближайшее время для обсуждения вашего проекта
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Оставьте заявку на консультацию
            </h2>
            <p className="text-blue-100 text-lg">
              Расскажите о вашей задаче, и мы предложим оптимальное решение
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ваше имя"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+7 (999) 999-99-99"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Кратко о задаче *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Опишите вашу задачу или проект..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;