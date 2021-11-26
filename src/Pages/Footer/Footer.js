import React from 'react';
import './Footer.css';
// import logo----
import logo from '../../image/logo.jpg';
import foot1 from '../../image/foot1.png';
import foot2 from '../../image/foot3.png';
import foot3 from '../../image/foot4.png';
import payment from '../../image/footer pay.PNG';
// import fon awesome---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const element1 = <FontAwesomeIcon icon={faMobile} />
const element2 = <FontAwesomeIcon icon={faEnvelope} />
const element3 = <FontAwesomeIcon icon={faPhone} />
// const element4 = <FontAwesomeIcon icon={} />


const Footer = () => {
    return (
        <div className="mt-5">
            <div className="main-footer bg-dark" >
                <div className="container text-md-left">
                    <div className="row">
                        <div id="divH" className="col-lg-3 col-md-4 col-12 ">
                            <h5 id="rightreser">Diamond Restora</h5>
                            <img id="imglogo" src={logo} alt="" /><br />

                            <h5 id="rightreser">Invest Partners</h5>
                            <div id="logodiv" className="d-flex ">
                                <li><img id="imglogo" className="partsize" src={foot1} alt="" /></li>
                                <li><img id="imglogo" className="partsize" src={foot2} alt="" /></li>
                                <li><img id="imglogo" className="partsize" src={foot3} alt="" /></li>
                            </div>

                        </div>
                        <div id="divH" className="col-lg-3 col-md-4 col-12">
                            <h4 >QUICK LINKS</h4>
                            <ul id="licolor" className="list-unstyled" >
                                <li>About</li>
                                <li>Services</li>
                                <li>Partners</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div id="divH" className="col-lg-3 col-md-4 col-12">
                            <h4>Contact us {element1}</h4>
                            <ul id="licolor" className="list-unstyled" >
                                <li>Email: {element2} diamondrestora@email.com</li>
                                <li>Phone: {element3} +8801967748444</li>
                                <li>Branh Contact: {element3} 02323444</li>
                            </ul>
                        </div>
                        <div id="divH" className="col-lg-3 col-md-4 col-12">
                            <ul id="licolor" className="list-unstyled" >

                            </ul>
                            <h4>Get In Touch</h4>
                            <img id="img-size" className="img-fluid p-3" src={payment} alt="" />
                        </div>
                        <div className="footer-bottom">
                            <p id="rightreser" className="text-xs-center">
                                &copy;{new Date().getFullYear()} Authority@- All Rights Reserved
                            </p>
                            <p id="rightreser">Term Condition || Privacy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;