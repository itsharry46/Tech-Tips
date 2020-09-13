import React from 'react';
import Navbar from './components/Navbar';
import Training from './components/Training';
import './index.css';
const Home = () => {
  return (
    <>
      <div className="green-bg">
      <h1>The future of students is here, experience better</h1>
        <p>Tech-Tips help E-lerning platform and students to improve there skills and engage more students.</p>
      </div>
      <Navbar />   
      <Training />
    </>
  );
};

export default Home;