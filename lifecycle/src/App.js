import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Simulate fetching data on component mount
  useEffect(() => {
    console.log('useEffect (componentDidMount)');
    // Simulate data fetching
   
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    console.log('useEffect (componentDidUpdate) - count changed');
  }, [count]); // Dependency array: run only when count changes

  const handleClick = () => {
    setCount(count + 1);
  };

  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
