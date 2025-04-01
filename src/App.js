import { useState } from 'react';
import './App.css';
import StocksGerant from './components/StocksGerant';

function App() {
  const [mode, setMode] = useState('employe');

  const toggleMode = () => {
    setMode(mode === 'employe' ? 'gerant' : 'employe');
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
          <div className="encaissment-section">ENCAISSEMENT</div>
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
          <div className="encaissment-gerant-section">ENCAISSEMENT</div>
        </div>
      )}
      <button className="mode-toggle" onClick={toggleMode}>
        {mode === 'employe' ? 'Mode Gérant' : 'Mode Employé'}
      </button>
    </div>
  );
}

export default App;
