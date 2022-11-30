import React, { useState } from 'react';

const ClickCounter = () => {
  const buttonStyle = {};
  const [count, setCount] = useState(0);
  const isCountzero = count <= 0
  const decrement = isCountzero ? 0 : count -1
  const increment  =  count +2 
  return (
      <div>
      <h2>Count: {count}</h2>
      <div>Click the button below to increment the counter</div>
      <button style={buttonStyle} onClick={() => setCount(increment)}>Click!</button>
      <button style={buttonStyle} onClick={() => setCount(decrement)}>UnClick!</button>


      </div>
    );
   }
  
  export default ClickCounter;