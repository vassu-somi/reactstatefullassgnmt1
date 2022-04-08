import React, { useState } from "react";

// import '../styles/App.css';

const data = {
  "2018": ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  "2019": ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  "2020": [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came"
  ],
  "2021": ["Covid Returns"],
  "2022": ["Adventures of Saiman", "Adventures of Shaktiman"]
};

const App = () => {
  const [sele, setSele] = useState(null);

  const selectRender = Object.keys(data).map((key) => (
    <option value={key}>{key}</option>
  ));

  const handleSelectChange = (event) => {
    setSele(event.target.value);
    event.preventDefault();
  };

  const listRender = Object.entries(data).map(([key, values]) => {
    if (key === sele) {
      return values.map((arr) => <li> {arr} </li>);
    }
  });

  return (
    <div id="main">
      <select onChange={handleSelectChange}>
        <option value={""}></option>
        {selectRender}
      </select>
      <div id="selected-year">
        {sele === null ? `No year selected ` : `Selected year-${sele}`}
      </div>
      <ul>{listRender}</ul>
    </div>
  );
};

export default App;
