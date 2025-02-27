// components/ReservationCard.tsx
import React, { useState } from "react";
import { FiCalendar, FiUsers } from 'react-icons/fi';
import { MdFlight } from 'react-icons/md';
import AIModal from "./AIModal";

interface Customer {
  id: string;
  name: string;
  email: string;
}

interface ReservationCardProps {
  reservation: {
    id: string;
    flightNumber: string;
    date: string;
    customers: Customer[];
  };
  isAdmin: boolean;
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  reservation,
  isAdmin
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <MdFlight className="text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">
          {reservation.flightNumber}
        </h3>
      </div>

      <div className="flex items-center text-gray-600 mb-4">
        <FiCalendar className="mr-2" />
        <span>{new Date(reservation.date).toLocaleDateString('tr-TR')}</span>
      </div>

      {isAdmin && (
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FiUsers className="text-gray-500 mr-2" />
            <h4 className="font-medium text-gray-700">Yolcular</h4>
          </div>
          <ul className="space-y-2">
            {reservation.customers.map((customer) => (
              <li 
                key={customer.id} 
                className="text-sm bg-gray-50 rounded-lg p-2"
              >
                <div className="font-medium text-gray-700">{customer.name}</div>
                <div className="text-gray-500">{customer.email}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition shadow-sm"
      >
        AI Önerileri
      </button>

      <AIModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={[
          "Öneri: Premium koltuk yükseltmesi uygun olabilir.",
          "Özet: Müşteri genellikle pencere kenarı tercih ediyor.",
          "Analiz: Uçuş saati tercihleri sabah saatlerinde yoğunlaşıyor."
        ]}
      />
    </div>
  );
};

export default ReservationCard;
