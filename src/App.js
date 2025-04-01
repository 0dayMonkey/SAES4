// src/App.js
import { useState } from 'react';
import './App.css';
import StocksGerant from './components/StocksGerant';
import Keyboard from './components/Keyboard';
import StoreStatus from './components/StoreStatus';
import ConfirmationDialog from './components/ConfirmationDialog';

function App() {
  const [mode, setMode] = useState('employe');
  const [keyboardInput, setKeyboardInput] = useState('');
  const [isStoreOpen, setIsStoreOpen] = useState(true); // Par défaut, le magasin est ouvert
  const [showDialog, setShowDialog] = useState(false);

  const toggleMode = () => {
    setMode(mode === 'employe' ? 'gerant' : 'employe');
  };

  const toggleStoreStatus = () => {
    if (isStoreOpen) {
      // Montrer le dialogue de confirmation pour fermer le magasin
      setShowDialog(true);
    } else {
      // Ouvrir directement le magasin sans confirmation
      setIsStoreOpen(true);
    }
  };

  const handleKeyPress = (key) => {
    if (key === '.' && keyboardInput.includes('.')) {
      return;
    }
    setKeyboardInput(prev => prev + key);
  };
  
  const handleClear = () => {
    if (keyboardInput.length > 0) {
      setKeyboardInput(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className={`container ${mode}`}>
      <div className="header">
        <div className="header-left">PROJET 4E {mode.toUpperCase()}</div>
        <div className="header-right">
          <StoreStatus 
            isOpen={isStoreOpen} 
            toggleStatus={toggleStoreStatus}
            mode={mode}
          />
        </div>
      </div>
      {mode === 'employe' ? (
        <div className="content-wrapper">
          <div className="main-content">
            <div className="pump-section">POMPES ET ENERGIES</div>
            <div className="energies-pompe-section">ENERGIES POMPE</div>
            <div className="consultation-carte-section">CONSULTATION CARTE</div>
          </div>
          <div className={`encaissment-section ${!isStoreOpen ? 'disabled' : ''}`}>
            <div className="encaissement-header">
              ENCAISSEMENT
              {!isStoreOpen && <div className="store-closed-notice">Magasin fermé</div>}
            </div>
            <div className="encaissement-content">
              {/* Contenu de la section encaissement */}
              {!isStoreOpen && (
                <div className="store-closed-overlay">
                  <div className="store-closed-message">
                    Les encaissements ne sont pas disponibles lorsque le magasin est fermé
                  </div>
                </div>
              )}
            </div>
            {isStoreOpen ? (
              <div className="keyboard-wrapper">
                <Keyboard 
                  onKeyPress={handleKeyPress}
                  onClear={handleClear}
                />
              </div>
            ) : (
              <div className="keyboard-wrapper disabled-keyboard">
                <div className="keyboard-disabled-message">
                  Clavier désactivé - Magasin fermé
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="content-wrapper">
          <div className="pump-energies-gerant-section">POMPES ET ENERGIES</div>
          <div className="main-content-gerant">
            <div className="recharge-gerant-section">RECHARGE CARTE</div>  
            <div className="stocks-gerant-section">
              <StocksGerant />
            </div>
          </div>
          <div className={`encaissment-gerant-section ${!isStoreOpen ? 'disabled' : ''}`}>
            <div className="encaissement-header">
              ENCAISSEMENT
              {!isStoreOpen && <div className="store-closed-notice">Magasin fermé</div>}
            </div>
            <div className="encaissement-content">
              {/* Contenu de la section encaissement en mode gérant */}
              {!isStoreOpen && (
                <div className="store-closed-overlay">
                  <div className="store-closed-message">
                    Les encaissements ne sont pas disponibles lorsque le magasin est fermé
                  </div>
                </div>
              )}
            </div>
            {isStoreOpen ? (
              <div className="keyboard-wrapper">
                <Keyboard 
                  onKeyPress={handleKeyPress}
                  onClear={handleClear}
                />
              </div>
            ) : (
              <div className="keyboard-wrapper disabled-keyboard">
                <div className="keyboard-disabled-message">
                  Clavier désactivé - Magasin fermé
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <button className="mode-toggle" onClick={toggleMode}>
        {mode === 'employe' ? 'Mode Gérant' : 'Mode Employé'}
      </button>
      
      {/* Dialogue de confirmation */}
      <ConfirmationDialog
        isOpen={showDialog}
        title="Fermeture du magasin"
        message="Êtes-vous sûr de vouloir fermer le magasin ? Les encaissements ne seront plus disponibles."
        onConfirm={() => {
          setIsStoreOpen(false);
          setShowDialog(false);
        }}
        onCancel={() => setShowDialog(false)}
        mode={mode}
      />
    </div>
  );
}

export default App;