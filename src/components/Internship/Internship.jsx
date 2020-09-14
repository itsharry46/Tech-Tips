import React from 'react';
import "./intern.css"
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

            <div class="container">
                <div class="row gy-4">
                    <div class="card col-sm-3">
                        <img src={engg} alt="engg" />
                        <p>Programming With Python</p>
                    </div>
                    <div class="card col-sm-3">
                        <img src={pt} alt="pt" />
                        <p>Web Development</p>
                    </div>
                    <div class="card col-sm-3">
                        <img src={ft} alt="ft" />
                        <p>Machine Learning</p>
                    </div>
                    <div class="card col-sm-3">
                        <img src={wh} alt="wh" />
                        <p>Data<br /> Mining</p>
                    </div>
                </div>
            </div>

            <NavLink to="#"><h1 className="next-page">View All Internship</h1></NavLink>

        </>
    );
}

export default Internship;