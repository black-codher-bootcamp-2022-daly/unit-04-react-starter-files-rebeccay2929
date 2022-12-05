import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [colour, setColour] =  useState("");

  const [, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>


        {/* age  */}
        <div>
          <label>
            Pet's Age:
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>



      {/* colour */}
      <div>
          <label>
            Pet's Colour:
            <input
              type="text"
              value={colour}
              onChange={(e) => {
                setColour(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>


        <input type="submit" value="Submit" id="submit-button" />
      </form>
      <div id="results">
        <h3>Results</h3>
       <div>Name: {name} </div> 
       <div>Age: {age}</div>
       <div>Colour: {colour} </div>

        <br />
      </div>
    </div>
  );
};

export default PetForm;
