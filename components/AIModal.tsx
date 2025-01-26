// components/AIModal.tsx
import React from "react";
import styles from "./AIModal.module.css";

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string[];
}

const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>AI Recommendations</h2>
        <ul>
          {content.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
};

export default AIModal;
