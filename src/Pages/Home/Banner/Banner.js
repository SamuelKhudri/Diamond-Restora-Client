import React from 'react';
import './banner.css';
import bn1 from '../../../image/ban-1.png';
import bn2 from '../../../image/ban-2.jpg';
import bn3 from '../../../image/ban-3.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div id="div-btm" class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="bn-size" src={bn1} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 id="font-sizeh1">Best Food Service</h1>
                            <h5>We Have the Best Chef in Our Management and We Have the Best
                                Rating Customer Satisfaction and Best Award from International ACC Taste  Competetion</h5>
                            <Link to='/allproducts'> <button className="btn">More Item</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img id="bn-size" src={bn2} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 id="font-sizeh1">Our Commitment</h1>
                            <h5>We Have the Best organizer team in Our Management and they collect the right information from
                                Rating Customer Satisfaction. We will provide you the best trustful information and honesty</h5>
                            <Link to='/allproducts'> <button className="btn">YourChoice</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img id="bn-size" src={bn3} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 style={{ color: 'orange' }} id="font-sizeh1">Services Journey</h1>
                            <h5 style={{ color: 'black' }}>We started our Journey from 1970. We have very reliable and great Partners.
                                We are very willing to have you in our Services</h5>
                            <Link to='/allproducts'> <button className="btn">More Item</button></Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;