import React from "react";
import { GrSend } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./footer.css";
import video from "../../Assets/video.gif";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <img src={video}></img>
      </div>

      <div className="setContent container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="contactInput">
            <div className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div id="book"className="inputDiv flex">
              <input type="text" placeholder="Enter Email Adress" />
              <button className="btn flex" type="submit">
                SEND <GrSend className="icon" />
              </button>
            </div>
          </div>
          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="footerParagraph">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <MdOutlineTravelExplore className="icon" /> Travel
                </a>
              </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                nam magnam aliquam expedita labore ad recusandae asperiores
                temporibus! Harum, doloribus sit? Inventore veniam ratione sunt?
                Officia temporibus voluptatem quidem adipisci!
                <div className="footerSocial flex">
                  <FaInstagramSquare className="icon" />
                  <FaYoutube className="icon" />
                </div>
              </div>

              <div className="footerLinks grid">
                <div className="linkGroup">
                  <span className="groupTitle">OUR AGENCY</span>

                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Services
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Instruance
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Agency
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Tourism
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Payment
                  </li>
                </div>
                <div className="linkGroup">
                  <span className="groupTitle">PARTNERS</span>

                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Booking
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Rentcars
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    TripAdventure
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Brain
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Batman
                  </li>
                </div>
                <div className="linkGroup">
                  <span className="groupTitle">LAST MINUTE</span>

                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    California
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Cuba
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Norway
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Europa
                  </li>
                  <li className="footerList flex">
                    <FaAngleRight className="icon" />
                    Indonesia
                  </li>
                </div>
              </div>
            </div>
            <div className="finishFooter"></div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME </small>
            <small>
              
              But all this <span className="last">is not real</span>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
