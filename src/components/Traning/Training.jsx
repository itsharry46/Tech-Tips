import React from 'react';
import './training.css';
import air from '../../images/air.png';
import bc from '../../images/blockchain.png';
import dm from '../../images/dm.png';
import ml from '../../images/ml.png';
import python from '../../images/python.png';
import wd from '../../images/wd.png';
import cs from '../../images/cs.png';
import uiux from '../../images/uiux.png';
import { NavLink } from 'react-bootstrap';

const Training = () => {
    return (
        <>
            <div>
                <h1 className="train-title">Free-Trainings</h1>
                <p className="train-para">Learn New-Age Skills On The Go.</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="card col-sm-3">
                        <img src={python} alt="python" />
                        <p>Programming With Python</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={wd} alt="wd" />
                        <p>Web Development</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={ml} alt="ml" />
                        <p>Machine Learning</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={dm} alt="dm" />
                        <p>Data<br /> Mining</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="card col-sm-3">
                        <img src={cs} alt="cyber-security" />
                        <p>Cyber<br /> Security</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={bc} alt="block-chain" />
                        <p>Block<br /> Chain</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={air} alt="air" />
                        <p>Airtifical Intelligence</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={uiux} alt="ui/ux" />
                        <p>UI/UX Designing</p>
                    </div>
                </div>
            </div>

            <NavLink to="#"><h1 className="next-page">View All Training</h1></NavLink>

        </>
    );
}

export default Training;