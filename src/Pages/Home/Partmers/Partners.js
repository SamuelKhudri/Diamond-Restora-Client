import React from 'react';

import './Partmers.css'

import part1 from '../../../images/part1-swggy.png';
import part2 from '../../../images/part2-zommato.jpg';
import part3 from '../../../images/part3-ubeats.png';
import part4 from '../../../images/part4-fodpanda.png';
const Partners = () => {
    return (
        <div style={{ marginBottom: '80px' }} className=" back-part mt-5">
            <h1 style={{ color: 'white' }} >Our partners</h1>
            <div className="row">
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3 " src={part1} alt="" />
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3" src={part2} alt="" />
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3" src={part3} alt="" />
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <img id="img-size" className="img-fluid m-3" src={part4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;