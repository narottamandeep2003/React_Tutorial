import React, { useState } from 'react';
import './App.css'; // assuming CSS is correctly set up

function App() {
  let arr = [
    "/a.png", "/b.png", "/c.png", "/d.png"
  ];

  const [curr, setCurr] = useState(0);

  const handlePrev = () => {
    if (curr > 0) {
      setCurr(curr - 1);
    }
  };

  const handleNext = () => {
    setCurr((curr + 1) % arr.length);
  };

  return (
    <div className="app">
      <img src={arr[curr]} alt="Displayed" width={500} height={500} />

      <br />
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
