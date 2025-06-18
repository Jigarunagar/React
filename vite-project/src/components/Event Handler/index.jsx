import React from "react";
import { useState } from "react";
const EventHandler = () => {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // form refresh न हो
    alert(`Form submitted! Name: ${name}`);
  };

  return (
    <>
      <div>
        <h1>React Event Handler Example</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <br />
      <div>
        <h1>Input Value: {inputValue}</h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type something..."
        />
      </div>

      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" className="btnsubmit" >Submit</button>
      </form>
    </>
  );
};

export default EventHandler;
