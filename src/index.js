import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const handleSubmit = async () => {
  try {
    const response = await axios.post('/loan/apply', {
      businessDetails: {
        // ... business details data
      },
      loanAmount: 50000, // Example loan amount
    });

    if (response.status === 200) {
      const preAssessment = response.data.preAssessment;
      // Do something with the preAssessment value, such as displaying it to the user
    }
  } catch (error) {
    // Handle error
    console.error('Error submitting loan application:', error);
  }
};
reportWebVitals();
