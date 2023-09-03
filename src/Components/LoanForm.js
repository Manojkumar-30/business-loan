import React, { useState } from 'react';

function LoanForm() {
  const [businessDetails, setBusinessDetails] = useState({
    name: '',
    yearEstablished: '',
  });

  const [loanAmount, setLoanAmount] = useState('');
  const [preAssessment, setPreAssessment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/loan/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ businessDetails, loanAmount }),
      });

      if (response.ok) {
        const data = await response.json();
        setPreAssessment(data.preAssessment);
      } else {
        setError('An error occurred while processing your request.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="LoanForm">
      <h2>Business Loan Application</h2>
      <form>
        {/* ... Input fields ... */}
        <button type="button" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit Application'}
        </button>
        {error && <p className="error">{error}</p>}
        {preAssessment !== null && (
          <p className="pre-assessment">
            Pre-assessment: {preAssessment}%
          </p>
        )}
      </form>
    </div>
  );
}

export default LoanForm;
