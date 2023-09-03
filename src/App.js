import React, { useState } from 'react';
import './App.css';
import LoanForm from '../src/Components/LoanForm';




function App() {
  const [businessDetails, setBusinessDetails] = useState({
    name: '',
    yearEstablished: '',
  });

  const [loanAmount, setLoanAmount] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBusinessDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission, send data to backend, etc.
    console.log('Business Details:', businessDetails);
    console.log('Loan Amount:', loanAmount);
    // You would typically make API requests here
  };

  return (
    <div className="App">
      <h1>Business Loan Application</h1>
      <form>
        <div>
          <label>Name of Business:</label>
          <input
            type="text"
            name="name"
            value={businessDetails.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Year Established:</label>
          <input
            type="text"
            name="yearEstablished"
            value={businessDetails.yearEstablished}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit Application
        </button>
      </form>
    </div>
  );
}



export default App;
