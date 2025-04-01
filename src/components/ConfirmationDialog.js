// src/components/ConfirmationDialog.js
import React, { useEffect } from 'react';
import '../styles/ConfirmationDialog.css';

/**
 * Composant de dialogue de confirmation stylisé
 * @param {boolean} isOpen - Si le dialogue est visible
 * @param {string} title - Titre du dialogue
 * @param {string} message - Message de confirmation
 * @param {function} onConfirm - Fonction à exécuter si confirmation
 * @param {function} onCancel - Fonction à exécuter si annulation
 * @param {string} mode - Mode actuel (employe/gerant)
 */
const ConfirmationDialog = ({ isOpen, title, message, onConfirm, onCancel, mode }) => {
  // Empêcher le défilement du body quand le dialogue est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Gérer la touche Escape pour fermer le dialogue
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    
    // Nettoyage
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onCancel]);
  
  if (!isOpen) return null;
  
  // Classe à appliquer en fonction du mode
  const dialogClass = `dialog-container ${mode}`;
  
  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div 
        className={dialogClass}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <h3 id="dialog-title" className="dialog-title">{title}</h3>
        <p className="dialog-message">{message}</p>
        <div className="dialog-buttons">
          <button 
            className={`dialog-button dialog-button-cancel ${mode}`}
            onClick={onCancel}
          >
            Non
          </button>
          <button 
            className={`dialog-button dialog-button-confirm ${mode}`}
            onClick={onConfirm}
            autoFocus
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;