import React from "react";
import Home from "./Home/Home";
import Main from "./Main/Main";
import { useState } from "react";

const Work = () => {
  const [maxPrice, setMaxPrice] = useState(3000);

  const handleSliderChange = (newValue) => {
    setMaxPrice(newValue);
  };

  return (
    <div>
      <Home onSliderChange={handleSliderChange} />
      <Main maxPrice={maxPrice} />
    </div>
  );
};

export default Work;
