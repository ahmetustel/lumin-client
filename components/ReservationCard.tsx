// components/ReservationCard.tsx
import React, { useState } from "react";
import AIModal from "./AIModal";

interface Customer {
  id: string;
  name: string;
  email: string;
}

interface Reservation {
  id: string;
  flightNumber: string;
  date: string;
  customers: Customer[];
}

const ReservationCard: React.FC<{ reservation: Reservation }> = ({
  reservation,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const aiComments = [
    "Recommendation: Upgrade to premium seating.",
    "Summary: Customer prefers window seats.",
  ];

  return (
    <>
      <div className="reservation-card bg-white shadow-md rounded p-4 mb-4">
        <h3 className="text-xl font-bold">
          Flight: {reservation.flightNumber}
        </h3>
        <p className="text-gray-600">
          Date: {new Date(reservation.date).toLocaleDateString()}
        </p>
        <h4 className="mt-2 font-semibold">Customers:</h4>
        <ul className="list-disc list-inside">
          {reservation.customers.map((customer) => (
            <li key={customer.id}>
              {customer.name} ({customer.email})
            </li>
          ))}
        </ul>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          View AI Comments
        </button>
      </div>
      {/* Reservation details */}
      <button onClick={() => setIsModalOpen(true)}>View AI Comments</button>
      <AIModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={aiComments}
      />
    </>
  );
};

export default ReservationCard;
