import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CurrencyConverter.css'

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [apiKey, setAPIKey] = useState('a4f445c212e54cca9ccf72f8038d2e09');

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await axios.get(`https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`);
        setCurrencies(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCurrencies();
  }, [apiKey]);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  };

  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
  };

  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value);
  };

  async function handleConvert() {
    try {
      const response = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${apiKey}`);
      const { rates } = response.data;
      const conversionRate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(amount * conversionRate);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='mycontainer'>
      <div className='currency-converter'>
        <div className='currency-converter-container'>
          <h3>Currency Converter</h3>
          <label className='label'>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount to convert"
            className='currency-input input'
          />
          <label className='label'>Form</label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange} className='currency-from-select input'>
            {Object.keys(currencies).map((code) => (
              <option key={code} value={code} className='currency-from-option'>
                {currencies[code]}
              </option>
            ))}
          </select>
          <label className='label'>To</label>
          <select value={toCurrency} onChange={handleToCurrencyChange} className='currency-to-select input'>
            {Object.keys(currencies).map((code) => (
              <option key={code} value={code} className='currency-to-option'>
                {currencies[code]}
              </option>
            ))}
          </select>
          <button onClick={handleConvert} className='convert-button'>Convert</button>
          <p className='currency-output'>{convertedAmount} {toCurrency}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;