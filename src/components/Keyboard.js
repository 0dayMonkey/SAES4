// src/components/Keyboard.js
import React, { useEffect, useRef } from 'react';
import '../styles/Keyboard.css';
// Importez les fichiers son si vous en avez 
// (ou utilisez des URL pour les héberger ailleurs)
import keySound from '../assets/audio/bip.mp3';

// Référence globale pour stocker l'élément input actuellement actif
let activeInput = null;

const Keyboard = ({ onKeyPress, onClear }) => {
  // Référence pour l'élément audio
  const audioRef = useRef(null);

  useEffect(() => {
    // Fonction pour capturer l'élément qui reçoit le focus
    const handleFocus = (e) => {
      // Vérifier si l'élément est un input ou textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        activeInput = e.target;
      }
    };

    // Ajouter des écouteurs d'événements pour capturer le focus
    document.addEventListener('focusin', handleFocus);

    // Nettoyage lors du démontage du composant
    return () => {
      document.removeEventListener('focusin', handleFocus);
    };
  }, []);

  // Fonction pour jouer le son
  const playSound = (type = 'normal') => {
    if (audioRef.current) {
      // Réinitialiser le son pour permettre de le rejouer rapidement
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => {
        // Gérer l'erreur silencieusement - certains navigateurs 
        // bloquent l'autoplay sans interaction utilisateur
        console.log("Son non joué:", e);
      });
    }
  };

  const handleKeyClick = (key) => {
    // Jouer le son approprié
    if (key === 'C') {
      playSound('clear');
    } else {
      playSound('normal');
    }

    // Si aucun input n'est actif, ne rien faire
    if (!activeInput) return;

    if (key === 'C') {
      // Effacer le dernier caractère de l'input actif
      const currentValue = activeInput.value;
      activeInput.value = currentValue.slice(0, -1);
      
      // Pour les inputs contrôlés par React, simule un événement change
      simulateInputChange(activeInput);
    } else {
      // Ajouter le caractère à la position du curseur
      const cursorPos = activeInput.selectionStart;
      const currentValue = activeInput.value;
      const newValue = 
        currentValue.slice(0, cursorPos) + 
        key + 
        currentValue.slice(cursorPos);
      
      // Mettre à jour la valeur directement
      activeInput.value = newValue;
      
      // Placer le curseur juste après le caractère inséré
      activeInput.setSelectionRange(cursorPos + 1, cursorPos + 1);
      
      // Pour les inputs contrôlés par React, simule un événement change
      simulateInputChange(activeInput);
    }
    
    // Redonner le focus à l'input actif
    activeInput.focus();
  };

  // Fonction pour simuler un événement change complet pour React
  const simulateInputChange = (input) => {
    // Créer et déclencher l'événement input
    const inputEvent = new Event('input', { bubbles: true });
    input.dispatchEvent(inputEvent);
    
    // Créer et déclencher l'événement change
    const changeEvent = new Event('change', { bubbles: true });
    input.dispatchEvent(changeEvent);
    
    // Pour React, ces événements peuvent ne pas suffire, donc on essaie de cibler les props React
    if (input._valueTracker) {
      input._valueTracker.setValue('');
    }
  };

  return (
    <div className="keyboard-container">
      {/* Élément audio pour jouer le son */}
      <audio ref={audioRef} preload="auto">
        <source src={keySound} type="audio/mpeg" />
        {/* Fallback */}
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
      
      <div className="keyboard-grid">
        <div className="keyboard-row">
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('1')} type="button">1</button>
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('2')} type="button">2</button>
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('3')} type="button">3</button>
        </div>
        <div className="keyboard-row">
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('4')} type="button">4</button>
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('5')} type="button">5</button>
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('6')} type="button">6</button>
        </div>
        <div className="keyboard-row">
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('7')} type="button">7</button>
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('8')} type="button">8</button>
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('9')} type="button">9</button>
        </div>
        <div className="keyboard-row">
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('.')} type="button">.</button>
          <button className="keyboard-key" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('0')} type="button">0</button>
          <button className="keyboard-key keyboard-key-clear" onMouseDown={(e) => e.preventDefault()} onClick={() => handleKeyClick('C')} type="button">C</button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;