// src/components/StoreStatus.js
import React from 'react';
import '../styles/StoreStatus.css';

/**
 * Composant pour gérer l'ouverture et la fermeture de la boutique
 * Utilise la police Inter en bold et un cercle de couleur agrandi
 * @param {boolean} isOpen - État actuel du magasin (ouvert/fermé)
 * @param {function} toggleStatus - Fonction pour basculer l'état du magasin
 * @param {string} mode - Mode actuel (employe/gerant)
 */
const StoreStatus = ({ isOpen, toggleStatus, mode }) => {
  // Classes CSS conditionnelles en fonction de l'état et du mode
  const statusClasses = `store-status ${isOpen ? 'open' : 'closed'} ${mode}`;
  
  return (
    <div 
      className={statusClasses}
      onClick={toggleStatus}
      role="button"
      aria-pressed={!isOpen}
      tabIndex="0"
      aria-label={`Cliquez pour ${isOpen ? 'fermer' : 'ouvrir'} le magasin`}
      onKeyDown={(e) => {
        // Accessibilité : permettre l'activation avec Entrée ou Espace
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleStatus();
        }
      }}
    >
      <span className="store-status-text">
        MAGASIN {isOpen ? 'OUVERT' : 'FERMÉ'}
      </span>
    </div>
  );
};

export default StoreStatus;

