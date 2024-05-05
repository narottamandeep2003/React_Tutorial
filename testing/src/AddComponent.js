import React from 'react';

const AddComponent = ({ a, b }) => {
  const add = (a, b) => a + b;

  return (
    <div>
      <h2>Addition Result:</h2>
      <p>{`${a} + ${b} = ${add(a, b)}`}</p>
    </div>
  );
};

export default AddComponent;