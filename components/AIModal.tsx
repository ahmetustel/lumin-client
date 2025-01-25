// components/AIModal.tsx
import React from "react";

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string[];
}

const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>AI Recommendations</h2>
        <ul>
          {content.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AIModal;
