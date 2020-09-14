import React from 'react';
import Navbar from './components/Navbar';
import Training from './components/Traning/Training';
import Internship from './components/Internship/Internship';
import './index.css';
import landpage from './images/landing-page.svg';
const Home = () => {
  return (
    <>
      <div className='containers'>
        <div className="green-bg">
          <img className="landing-img" src={landpage} alt="Langing-images" />
          <h1>The future of students is here, experience better</h1>
          <p>Tech-Tips help E-lerning platform and students to improve there skills and engage more students.</p>
        </div>
      </div>
      <Navbar />
      <Training /><br/><br/><br/><br/><br/><br/>
      <Internship />
    </>
  );
};

export default Home;