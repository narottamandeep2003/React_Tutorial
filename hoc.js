import React, { useState } from 'react';

// Higher-Order Component to log mouse position
const withMousePosition = (WrappedComponent) => {
  const MousePositionLogger = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
      <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
        <WrappedComponent mousePosition={position} />
      </div>
    );
  };

  return MousePositionLogger;
};

// Component that displays the mouse position
const DisplayMousePosition = ({ mousePosition }) => {
  return (
    <div>
      <h2>Mouse Position</h2>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
};

// Applying the HOC to the DisplayMousePosition component
const DisplayMousePositionWithHOC = withMousePosition(DisplayMousePosition);

// Function-based component
const App = () => {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <DisplayMousePositionWithHOC />
    </div>
  );
};

export default App;
