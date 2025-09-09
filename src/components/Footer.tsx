import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">KHRULENKO IT</div>
              <div className="text-gray-300 space-y-1 text-sm">
                <p>© 2025 ИП Хруленко Алексей Юрьевич</p>
                <p>ИНН: 612302771736</p>
                <p>ОГРНИП: 324619600265134</p>
                <p className="mt-3 pt-3 border-t border-gray-700">
                  Юридический адрес: Ростовская область, Неклиновский район,<br />
                  село Андреево-Мелентьево, Первомайский переулок, 39А
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end">
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => openModal('offer')}
                  className="block text-gray-300 hover:text-white transition-colors text-left md:text-right"
                >
                  Публичная оферта
                </button>
                <button 
                  onClick={() => openModal('privacy')}
                  className="block text-gray-300 hover:text-white transition-colors text-left md:text-right"
                >
                  Политика конфиденциальности
                </button>
                <button 
                  onClick={() => openModal('consent')}
                  className="block text-gray-300 hover:text-white transition-colors text-left md:text-right"
                >
                  Согласие на обработку персональных данных
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Модальные окна */}
      <Modal
        isOpen={activeModal === 'offer'}
        onClose={closeModal}
        title="Публичная оферта"
      >
        <div className="space-y-4 text-sm leading-relaxed">
          <h4 className="text-lg font-semibold">Публичная оферта на оказание ИТ-услуг</h4>
          
          <p>
            Индивидуальный предприниматель Хруленко Алексей Юрьевич, ИНН 612302771736, ОГРНИП 324619600265134, 
            действующий на основании государственной регистрации и патентной системы налогообложения, 
            публикует настоящую оферту для физических лиц-резидентов РФ.
          </p>

          <h5 className="font-semibold">1. Предмет договора</h5>
          <p>Исполнитель оказывает услуги по:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>разработке системного и прикладного программного обеспечения;</li>
            <li>созданию, адаптации и модификации веб-сайтов, баз данных и других компонентов ИТ-инфраструктуры;</li>
            <li>созданию и внедрению Telegram-ботов.</li>
          </ul>

          <h5 className="font-semibold">2. Порядок заключения договора</h5>
          <p>Оферта считается акцептованной в момент оплаты услуги через QR-код или другими доступными способами на сайте.</p>

          <h5 className="font-semibold">3. Стоимость услуг</h5>
          <p>Консультация по задаче с предоставлением расчёта и оценки стоимости составляет 3000 рублей. Стоимость выполнения работ определяется индивидуально, исходя из объёма и сложности задачи.</p>

          <h5 className="font-semibold">4. Оплата и возврат</h5>
          <p>Оплата осуществляется по QR-коду на сайте. Возврат возможен при невозможности оказания услуги.</p>

          <h5 className="font-semibold">5. Ответственность сторон</h5>
          <p>Исполнитель обязуется выполнить работу в разумные сроки. Заказчик обязуется предоставить всю необходимую информацию.</p>

          <h5 className="font-semibold">6. Реквизиты исполнителя</h5>
          <div className="space-y-1">
            <p>ИП Хруленко Алексей Юрьевич</p>
            <p>ИНН: 612302771736</p>
            <p>ОГРНИП: 324619600265134</p>
            <p>Юридический адрес: Ростовская область, Неклиновский район, село Андреево-Мелентьево, Первомайский переулок, 39А</p>
            <p>Email: ella.hrulenko@yandex.ru</p>
            <p>Телефон: (будет добавлен позже)</p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Политика конфиденциальности"
      >
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Все данные, передаваемые через сайт (ФИО, email, описание заказа), обрабатываются 
            ИП Хруленко Алексей Юрьевич в соответствии с ФЗ-152 «О персональных данных».
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Данные не передаются третьим лицам без согласия клиента.</li>
            <li>Используются только для связи с клиентом, оказания и подтверждения услуги, отправки квитанции.</li>
            <li>Хранятся на защищённых серверах, срок — не более 3 лет.</li>
          </ul>
          
          <p>По вопросам конфиденциальности: ella.hrulenko@yandex.ru</p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'consent'}
        onClose={closeModal}
        title="Согласие на обработку персональных данных"
      >
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Я, заполняя формы на сайте, даю согласие ИП Хруленко Алексей Юрьевич, ИНН 612302771736, 
            на обработку моих персональных данных: ФИО, email, описание запроса, IP-адрес.
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Цель — получение услуг, обратная связь, выдача квитанций.</li>
            <li>Данные не передаются третьим лицам без моего согласия.</li>
            <li>Срок хранения: до момента отзыва.</li>
          </ul>
          
          <p>Email для связи: ella.hrulenko@yandex.ru</p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
