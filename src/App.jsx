import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  return(
    <>
      <Navbar/>
      <div className="green-bg"></div>
    </>
  );
};

export default App;