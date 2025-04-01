import React, { useState } from 'react';
import '../styles/StocksGerant.css';

const StocksGerant = () => {
  const [viewMode, setViewMode] = useState('energie');
  const [energyType, setEnergyType] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleCommand = () => {
    if (viewMode === 'energie') {
      console.log(`Commande passé: 
-Type de carburant -> ${energyType}
-Quantité -> ${quantity} L`);
    } else {
      console.log(`Commande passé: 
-Produit -> ${productType}
-Quantité -> ${quantity}`);
    }
  };

  return (
    <div className="stocks-container">
      <div className="stocks-header">
        <h1 className="stocks-title">STOCKS</h1>
        <div>
          <button 
            className={`stocks-button stocks-button-energie ${viewMode === 'energie' ? 'active' : 'inactive'}`}
            onClick={() => setViewMode('energie')}
          >
            énergie
          </button>
          <button 
            className={`stocks-button ${viewMode === 'produits' ? 'active' : 'inactive'}`}
            onClick={() => setViewMode('produits')}
          >
            produits
          </button>
        </div>
      </div>

      <div className="stocks-content-box">
        <h2 className="stocks-subtitle">
          {viewMode === 'energie' ? 'Stockage en carburant' : 'Stockage des produits'}
        </h2>
        
        {viewMode === 'energie' ? (
          <table className="stocks-table">
            <thead>
              <tr>
                <th className="stocks-table-cell">Pompes</th>
                <th className="stocks-table-cell">1</th>
                <th className="stocks-table-cell">2</th>
                <th className="stocks-table-cell">3</th>
                <th className="stocks-table-cell">4</th>
                <th className="stocks-table-cell">Total</th>
                <th className="stocks-table-cell">Prix</th>
              </tr>
              <tr>
                <th className="stocks-table-cell">Volume carburants :</th>
                <th className="stocks-table-cell">L</th>
                <th className="stocks-table-cell">%</th>
                <th className="stocks-table-cell">L</th>
                <th className="stocks-table-cell">%</th>
                <th className="stocks-table-cell">L</th>
                <th className="stocks-table-cell">%</th>
                <th className="stocks-table-cell">L</th>
                <th className="stocks-table-cell">%</th>
                <th className="stocks-table-cell">L</th>
                <th className="stocks-table-cell">%</th>
                <th className="stocks-table-cell">€</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="stocks-table-cell">superéthanol</td>
                <td className="stocks-table-cell">32</td>
                <td className="stocks-table-cell">12</td>
                <td className="stocks-table-cell">31</td>
                <td className="stocks-table-cell">13</td>
                <td className="stocks-table-cell">54</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">22</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">3,4</td>
              </tr>
              <tr>
                <td className="stocks-table-cell">Electrique</td>
                <td className="stocks-table-cell">23</td>
                <td className="stocks-table-cell">24</td>
                <td className="stocks-table-cell">34</td>
                <td className="stocks-table-cell">54</td>
                <td className="stocks-table-cell">55</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">22</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">4,5</td>
              </tr>
              <tr>
                <td className="stocks-table-cell">gazole</td>
                <td className="stocks-table-cell">23</td>
                <td className="stocks-table-cell">24</td>
                <td className="stocks-table-cell">34</td>
                <td className="stocks-table-cell">54</td>
                <td className="stocks-table-cell">55</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">22</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">8,5</td>
              </tr>
              <tr>
                <td className="stocks-table-cell">hydrogène</td>
                <td className="stocks-table-cell">23</td>
                <td className="stocks-table-cell">24</td>
                <td className="stocks-table-cell">34</td>
                <td className="stocks-table-cell">54</td>
                <td className="stocks-table-cell">55</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">22</td>
                <td className="stocks-table-cell">43</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">panf</td>
                <td className="stocks-table-cell">2,7</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="stocks-table">
            <thead>
              <tr>
                <th className="stocks-table-cell">Produit</th>
                <th className="stocks-table-cell">Quantité</th>
                <th className="stocks-table-cell">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="stocks-table-cell">Essuie-glace</td>
                <td className="stocks-table-cell">45</td>
                <td className="stocks-table-cell">7,50</td>
              </tr>
              <tr>
                <td className="stocks-table-cell">Lave vitre</td>
                <td className="stocks-table-cell">32</td>
                <td className="stocks-table-cell">3,20</td>
              </tr>
              <tr>
                <td className="stocks-table-cell">Huile moteur</td>
                <td className="stocks-table-cell">28</td>
                <td className="stocks-table-cell">15,90</td>
              </tr>
              <tr>
                <td className="stocks-table-cell">Chiffons</td>
                <td className="stocks-table-cell">60</td>
                <td className="stocks-table-cell">4,50</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="stocks-content-box">
        <h2 className="stocks-subtitle">
          {viewMode === 'energie' ? 'Commande Energie' : 'Commande Produit'}
        </h2>
        <div className="stocks-form-container">
          <label className="stocks-form-label">
            {viewMode === 'energie' ? 'Type :' : 'Produit :'}
          </label>
          <select 
            className="stocks-form-input"
            style={{ width: '120px' }}
            value={viewMode === 'energie' ? energyType : productType}
            onChange={(e) => viewMode === 'energie' ? setEnergyType(e.target.value) : setProductType(e.target.value)}
          >
            <option value="">Sélectionner</option>
            {viewMode === 'energie' ? (
              <>
                <option value="superéthanol">Superéthanol</option>
                <option value="Electrique">Electrique</option>
                <option value="gazole">Gazole</option>
                <option value="hydrogène">Hydrogène</option>
              </>
            ) : (
              <>
                <option value="Essuie-glace">Essuie-glace</option>
                <option value="Lave vitre">Lave vitre</option>
                <option value="Huile moteur">Huile moteur</option>
                <option value="Chiffons">Chiffons</option>
              </>
            )}
          </select>
          
          <label className="stocks-form-label stocks-form-label-space">
            {viewMode === 'energie' ? 'Litre :' : 'Quantité :'}
          </label>
          <input 
            type="text" 
            className="stocks-form-input"
            style={{ width: '50px' }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {viewMode === 'energie' && <span className="stocks-unit">L</span>}
        </div>
        
        <div className="stocks-command-container">
          <button 
            className="stocks-command-button"
            onClick={handleCommand}
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

export default StocksGerant; 