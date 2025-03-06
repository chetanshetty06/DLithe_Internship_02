import React, { useState } from 'react';

function InputForm() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleButtonClick = () => {
    alert(`Input 1: ${input1}, Input 2: ${input2}`);
  };

  return (
    <div>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first input"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second input"
      />
      <button onClick={handleButtonClick}>Show Inputs</button>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState("Hello, React!");

  const changeMessage = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click me</button>
      <InputForm />
    </div>
  );
}

export default App;
