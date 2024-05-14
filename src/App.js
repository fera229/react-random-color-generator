import './App.css';
import React, { useState } from 'react';

function App() {
  // State to hold the current color
  const [color, setColor] = useState('#FFFFFF');

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            backgroundColor: color,
            padding: '50px',
            color: 'white',
            borderRadius: '10px',
          }}
        >
          Generated Color: {color}
        </div>
        <button onClick={generateRandomColor}>Generate</button>
      </header>
    </div>
  );
}

export default App;
