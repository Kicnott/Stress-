import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a GET request to the backend API
    const fetchMessage = async () => {
      const response = await fetch('/api/test'); // This is proxied to Express backend
      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();

  }, []);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;