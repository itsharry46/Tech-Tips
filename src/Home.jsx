import React from 'react';
import Navbar from './components/Navbar';
import Training from './components/Traning/Training';
import Internship from './components/Internship/Internship';
import './index.css';
import landpage from './images/landing-page.svg';
import video from "./images/video.png"
import ol from "./images/ol.svg"
import la from "./images/Learn_anywere.svg";
import map from "./images/map.png";
import cert from "./images/cert.png";
import sn from "./images/sn.png";

const Home = () => {
  return (
    <>
      <div className="green-bg">
        <img className="landing-img" src={landpage} alt="Langing-images" />
        <h1>The future of students is here, experience better</h1>
        <p>Tech-Tips help E-lerning platform and students to improve there skills and engage more students.</p>
      </div>
      <Navbar />
      <div className="banner-col">
        <p>We Provide Awesome</p>
        <h1>World Class Education For Everyone</h1>
        <div className="container">
          <div className="row">
            <div className="sm-img col">
              <img src={video} alt="video_logo" />
              <h3>Award Wining Course Managaement</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
            </div>
            <div className="img col">
              <img src={ol} alt="online-lec-img" />
            </div>
          </div>


          <div className="row">
            <div className="img col">
              <img src={la} alt="learn-anywhere" />
            </div>
            <div className="sm-img col">
              <img src={map} alt="map_logo" />
              <h3>Learn Anything From Anywhere Anytime</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
            </div>
          </div>

          <div className="row">
            <div className="sm-img col">
              <img src={sn} alt="sticky-notes" />
              <h3>Certification For Development<br/> Of Your Career</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
            </div>
            <div className="img col">
              <img src={cert} alt="certificate" />
            </div>
          </div>

        </div>
      </div>
      <Training /><br /><br /><br /><br /><br /><br />
      <Internship />
    </>
  );
};

export default Home;