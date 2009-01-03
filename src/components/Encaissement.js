// src/components/Encaissement.js
import React, { useState } from 'react';
import Keyboard from './Keyboard';
import '../styles/Encaissement.css';

const Encaissement = () => {
  const [items, setItems] = useState([
    { type: 'energy', name: 'Électrique', quantity: '1', price: '76.69', id: 1 },
    { type: 'product', name: 'pomme', quantity: '6', price: '26.65', id: 2 },
    { type: 'product', name: 'lave glace', quantity: '1', price: '46.99', id: 3 },
    { type: 'product', name: 'M&Ms', quantity: '1', price: '5.30', id: 4 },
    { type: 'card', name: 'Recharge', quantity: '1', price: '10', id: 5 }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [paidAmount, setpaidAmount] = useState('');
  const [returnAmount, setReturnAmount] = useState('');
  
  // Calculer le total
  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
  };
  
  const handleKeyPress = (key) => {
    if (key === '.' && inputValue.includes('.')) {
      return;
    }
    setInputValue(prev => prev + key);
  };
  
  const handleClear = () => {
    setInputValue('');
  };
  
  const handleSubmit = (action) => {
    if (action === 'cancel') {
      setInputValue('');
      setpaidAmount('');
      setReturnAmount('');
    } else if (action === 'validate') {
      const total = calculateTotal();
      setTotalAmount(total);
      setpaidAmount(inputValue);
      
      // Calculer la monnaie à rendre
      const returnValue = (parseFloat(inputValue) - parseFloat(total)).toFixed(2);
      setReturnAmount(returnValue > 0 ? returnValue : '0.00');
      
      setInputValue('');
    }
  };

  return (
    <div className="encaissement-container">
      <div className="encaissement-content">
        <h2>ENCAISSEMENT</h2>
        
        <div className="encaissement-sections">
          <div className="encaissement-section">
            <h3>Énergies</h3>
            <ul className="item-list">
              {items.filter(item => item.type === 'energy').map(item => (
                <li key={item.id}>• {item.name} <span className="price">{item.price}€</span></li>
              ))}
            </ul>
          </div>
          
          <div className="encaissement-section">
            <h3>Produits</h3>
            <ul className="item-list">
              {items.filter(item => item.type === 'product').map(item => (
                <li key={item.id}>• {item.name} x {item.quantity} <span className="price">{item.price}€</span></li>
              ))}
            </ul>
          </div>
          
          <div className="encaissement-section">
            <h3>Carte</h3>
            <ul className="item-list">
              {items.filter(item => item.type === 'card').map(item => (
                <li key={item.id}>• {item.name} <span className="price">{item.price}€</span></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="encaissement-totals">
          <div className="total-line">
            <span>Total :</span>
            <span className="total-value">{calculateTotal()}€</span>
          </div>
          <div className="total-line">
            <span>Total payé :</span>
            <span>{paidAmount}€</span>
          </div>
          <div className="total-line">
            <span>Total à rendre :</span>
            <span>{returnAmount}€</span>
          </div>
        </div>
      </div>
      
      <Keyboard 
        onKeyPress={handleKeyPress}
        onClear={handleClear}
        onSubmit={handleSubmit}
      />
      
      <div className="input-display">
        {inputValue || '0'}€
      </div>
    </div>
  );
};

export default Encaissement;