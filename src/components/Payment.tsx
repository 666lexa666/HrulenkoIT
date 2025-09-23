import React from 'react';
import { QrCode, CreditCard, RefreshCw } from 'lucide-react';

const Payment = () => {
  return (
    <section id="payment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Оплата услуг
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачные условия и удобные способы оплаты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Консультация и расчёт */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <CreditCard className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Консультация</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3000 ₽</div>
                  <div className="text-gray-700">за консультацию с подробным расчётом</div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• В рамках консультации вы получаете оценку стоимости и сроков</p>
                  <p>• Стоимость выполнения работ рассчитывается индивидуально</p>
                  <p>• Окончательная цена зависит от объёма и сложности задачи</p>
                </div>
              </div>
            </div>
            
            {/* Способы оплаты */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <QrCode className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Способы оплаты</h3>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14">
                  <img
                    src="/images/mir.svg"
                    alt="Мир"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-14 h-14">
                  <img
                    src="/images/sbp.svg"
                    alt="SBP"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-14 h-14">
                  <img
                    src="/images/pay.svg"
                    alt="Paymaster"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              
              <div className="space-y-4">
                <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                  <div className="flex items-center gap-3 mb-2">
                    <QrCode className="text-blue-600" size={20} />
                    <span className="font-semibold text-gray-900">QR-код СБП</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Быстрая оплата через Систему Быстрых Платежей
                  </p>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Мгновенное зачисление средств</p>
                  <p>• Безопасные платежи через банк</p>
                  <p>• Автоматическое подтверждение оплаты</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Информация о возврате */}
          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-start gap-3">
              <RefreshCw className="text-blue-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Информация о возврате</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Возврат средств возможен в случае невозможности оказания услуги со стороны исполнителя. 
                  Возврат осуществляется на тот же способ оплаты, который использовался при внесении средств, 
                  в течение 3-5 рабочих дней после подачи заявления.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
