import React from "react";
import "./home.css";
import { FaFilter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { useState } from "react";

const Home = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [maxPrice, setMaxPrice] = useState(3000);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setMaxPrice(newValue);

    // Передаємо нове значення до батьківського компонента через пропс
    props.onSliderChange(newValue);
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <img
        src="https://img2.akspic.ru/crops/5/1/5/6/7/176515/176515-samolet-samolety-polet-reaktivnyj_samolet-aviaciya-3840x2160.jpg"
        alt="zaraza"
      ></img>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your holidays
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv">
          <div className="destinationInput grid">
            <label htmlFor="City">Search your destination:</label>
            <div className="input">
              <input
                className="input"
                type="text"
                placeholder="Too few places..."
              />
            </div>
          </div>

          <div className="dataInput grid">
            <label htmlFor="date">Select your day:</label>
            <div className="input">
              <input
                className="input"
                type="date"
                placeholder="Enter name here..."
              />
            </div>
          </div>

          <div className="priceInput grid"></div>
          <div className="third-fraction">
            <div className="label_total flex">
              <label htmlFor="price">Max price</label>
              <h3 className="total">${maxPrice}</h3>
            </div>
            <div className="input flex">
              <input
                type="range"
                min="850"
                max="3000"
                step="50" //наскільки змінюється значення при пересуванні повзунка
                value={maxPrice}
                onChange={handleSliderChange} //Звичайний обробних наших паскудних подій
              />
            </div>
          </div>

          <div className="searchOptions flex">
            <FaFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFotterIcons flex">
          <div className="rightIcons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTelegram className="icon" />
          </div>
          <div className="left Icons">
            <FaList className="icon" />
            <TbAppsFilled className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
