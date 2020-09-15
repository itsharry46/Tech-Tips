import React from 'react';
import "./intern.css";
import engg from '../../images/engg.png';
import pt from '../../images/part-time.png';
import ft from '../../images/full-time.png';
import wh from '../../images/work-home.png';
import { NavLink } from 'react-bootstrap';

const Internship = () => {
    return (
        <>
            <div>
                <h1 className="train-title">Internship</h1>
                <p className="train-para">Apply To Each Opportunities You Recieve</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="card col-sm-3">
                        <img src={engg} alt="engg" />
                        <p>Engineering</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={pt} alt="pt" />
                        <p>Part-Time</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={ft} alt="ft" />
                        <p>Full-Time</p>
                    </div>
                    <div className="card col-sm-3">
                        <img src={wh} alt="wh" />
                        <p>Work-At-Home</p>
                    </div>
                </div>
            </div>

            <NavLink to="#"><h1 className="next-page">View All Internship</h1></NavLink>

        </>
    );
}

export default Internship;