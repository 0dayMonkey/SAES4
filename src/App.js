// src/App.js
import { useState } from 'react';
import './App.css';
import StocksGerant from './components/StocksGerant';
import Keyboard from './components/Keyboard';

function App() {
  const [mode, setMode] = useState('employe');
  const [keyboardInput, setKeyboardInput] = useState('');

  const toggleMode = () => {
    setMode(mode === 'employe' ? 'gerant' : 'employe');
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
        <div className="header-right">MAGASIN OUVERT</div>
      </div>
      {mode === 'employe' ? (
        <div className="content-wrapper">
          <div className="main-content">
            <div className="pump-section">POMPES ET ENERGIES</div>
            <div className="energies-pompe-section">ENERGIES POMPE</div>
            <div className="consultation-carte-section">CONSULTATION CARTE</div>
          </div>
          <div className="encaissment-section">
            <div className="encaissement-header">
              ENCAISSEMENT
            </div>
            <div className="encaissement-content">
              {/* Contenu de la section encaissement */}
            </div>
            <div className="keyboard-wrapper">
              <Keyboard 
                onKeyPress={handleKeyPress}
                onClear={handleClear}
              />
            </div>
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
          <div className="encaissment-gerant-section">
            <div className="encaissement-header">
              ENCAISSEMENT
            </div>
            <div className="encaissement-content">
              {/* Contenu de la section encaissement en mode gérant */}
            </div>
            <div className="keyboard-wrapper">
              <Keyboard 
                onKeyPress={handleKeyPress}
                onClear={handleClear}
              />
            </div>
          </div>
        </div>
      )}
      <button className="mode-toggle" onClick={toggleMode}>
        {mode === 'employe' ? 'Mode Gérant' : 'Mode Employé'}
      </button>
    </div>
  );
}

export default App;