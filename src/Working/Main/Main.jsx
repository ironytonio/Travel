import React from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCool } from "react-icons/bi";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import img from "../../Assets/img.jpg";
import img2 from "../../Assets/Santorini.webp";
import img3 from "../../Assets/Machu_Picchu.jpg";
import img4 from "../../Assets/Tokyo.jpg.webp";
import img5 from "../../Assets/Lake-Alberta.jpg";
import img6 from "../../Assets/Great Barrier Reef.jpg";
import img7 from "../../Assets/marrakech.jpg";
import img8 from "../../Assets/Grand.jpg";
import img9 from "../../Assets/venice.jpg";
import img10 from "../../Assets/Reykjavik.jpg";
import img11 from "../../Assets/dubai.jpg";
import img12 from "../../Assets/rio-de-janeiro.jpg";
import img13 from "../../Assets/cape-town.jpg";
import img14 from "../../Assets/Bangkok.jpg";
import img15 from "../../Assets/barcelona.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zeland",
    grade: "CULTURAL RELAX",
    fees: "700$",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Santorini",
    location: "Greece",
    grade: "BEACH GETAWAY",
    fees: "800$",
    description:
      "Santorini is famous for its stunning sunsets, white-washed buildings, and crystal-clear waters. A perfect destination for a beach getaway.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "HISTORICAL WONDER",
    fees: "1000$",
    description:
      "Explore the ancient ruins of Machu Picchu, a UNESCO World Heritage site. A must-visit destination for history enthusiasts.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Tokyo",
    location: "Japan",
    grade: "URBAN ADVENTURE",
    fees: "1200$",
    description:
      "Experience the vibrant city life of Tokyo, where modernity meets tradition. Discover bustling streets, high-tech gadgets, and delicious cuisine.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Banff National Park",
    location: "Canada",
    grade: "NATURE ESCAPE",
    fees: "900$",
    description:
      "Escape to the pristine beauty of Banff National Park. Enjoy stunning mountain landscapes, serene lakes, and abundant wildlife.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "UNDERWATER PARADISE",
    fees: "1500$",
    description:
      "Dive into the underwater paradise of the Great Barrier Reef. Explore vibrant coral reefs and encounter diverse marine life.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Marrakech",
    location: "Morocco",
    grade: "CULTURAL ENCHANTMENT",
    fees: "1100$",
    description:
      "Immerse yourself in the enchanting culture of Marrakech. Discover bustling souks, historic palaces, and traditional Moroccan hospitality.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Grand Canyon",
    location: "USA",
    grade: "NATURAL WONDER",
    fees: "800$",
    description:
      "Marvel at the breathtaking beauty of the Grand Canyon. Experience the awe-inspiring landscapes and geological wonders.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Venice",
    location: "Italy",
    grade: "ROMANTIC GETAWAY",
    fees: "1300$",
    description:
      "Embark on a romantic getaway to Venice. Cruise through picturesque canals, visit historic landmarks, and savor Italian cuisine.",
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Reykjavik",
    location: "Iceland",
    grade: "NORTHERN ADVENTURE",
    fees: "1400$",
    description:
      "Experience the wonders of Reykjavik in Iceland. Chase the Northern Lights, relax in geothermal hot springs, and explore unique landscapes.",
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: "Dubai",
    location: "United Arab Emirates",
    grade: "LUXURY RETREAT",
    fees: "2000$",
    description:
      "Indulge in a luxury retreat in Dubai. Discover opulent hotels, futuristic architecture, and extravagant shopping experiences.",
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: "Rio de Janeiro",
    location: "Brazil",
    grade: "CARNIVAL EXTRAVAGANZA",
    fees: "1600$",
    description:
      "Join the carnival extravaganza in Rio de Janeiro. Experience vibrant parades, lively samba music, and the iconic Christ the Redeemer statue.",
  },
  {
    id: 13,
    imgSrc: img13,
    destTitle: "Cape Town",
    location: "South Africa",
    grade: "SCENIC BEAUTY",
    fees: "1200$",
    description:
      "Explore the scenic beauty of Cape Town. Visit Table Mountain, enjoy pristine beaches, and discover the rich cultural heritage.",
  },
  {
    id: 14,
    imgSrc: img14,
    destTitle: "Bangkok",
    location: "Thailand",
    grade: "CULINARY ADVENTURE",
    fees: "1000$",
    description:
      "Embark on a culinary adventure in Bangkok. Taste delicious street food, visit vibrant markets, and experience Thai flavors.",
  },
  {
    id: 15,
    imgSrc: img15,
    destTitle: "Barcelona",
    location: "Spain",
    grade: "ARTISTIC DELIGHT",
    fees: "1400$",
    description:
      "Delight in the artistic treasures of Barcelona. Explore Gaudi's masterpieces, stroll along the vibrant La Rambla, and savor Catalan cuisine.'",
  },
];

const Main = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="main container section ">
      <div className="setTitle">
        <h3 data-aos="slide-right" basaclassName="title">
          Most visited destinations
        </h3>
        <br />
      </div>

      <div className="setContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => (
            <div data-aos="fade" key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="name" />
                  {location}
                </span>

                <div className="feel flex">
                  <div className="grade">
                    <span>
                      {grade} <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                    {parseInt(fees, 10) > props.maxPrice && (
                      <span className="maxFeesWarning">
                        <h3 style={{ color: imgSrc }}>Way too expensive</h3>
                      </span>
                    )}
                  </div>
                </div>

                <div className="desc">{description}</div>

                <button className="btn flex">
                  DETAILS <BiCool className="icon" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Main;
