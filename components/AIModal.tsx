// components/AIModal.tsx
import React from "react";
import { FiX } from 'react-icons/fi';
import { BiBrain } from 'react-icons/bi';

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string[];
}

const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <BiBrain className="text-blue-500 mr-2 text-xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              AI Önerileri
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FiX size={24} />
          </button>
        </div>

        <ul className="space-y-4 mb-6">
          {content.map((comment, index) => (
            <li 
              key={index} 
              className="flex items-start bg-blue-50 rounded-lg p-3"
            >
              <span className="text-blue-500 mr-3">•</span>
              <span className="text-gray-700">{comment}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition font-medium"
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default AIModal;
