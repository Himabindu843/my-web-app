import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Fetching message...');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>Full Stack Web App</h1>
      <p className="subtext">React Frontend + Node.js Backend</p>
      <hr />
      <h2>Server Response:</h2>
      <p className="message-box">{message}</p>
    </div>
  );
}

export default App;
