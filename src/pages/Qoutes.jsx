import axios from 'axios';
import { useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: { 'X-Api-Key': '//8iKUEmLNm10I8BucvF/Q==j5mZ1YVx3Ddp8sBx' },
      });
      setQuotes(response.data[0]); 
    } catch (error) {
      setError(error.response?.data?.error?.message || 'Something went wrong');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Quotes</h1>
      <button onClick={fetchQuotes} className="btn btn-primary mt-3">
        Fetch Quotes
      </button>

      {error && <p className="text-danger mt-3">{error}</p>}

      {quotes && (
        <div className="mt-3">
          <h3>{quotes.quote}</h3>
          <p>- {quotes.author}</p>
        </div>
      )}
    </div>
  );
};

export default Quotes;
