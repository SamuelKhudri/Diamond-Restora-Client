import React from 'react';
// import { Link } from 'react-router-dom';
import './ShowMinPro.css';
import imgba from '../../image/logo.jpg';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const ShowMinProd = (props) => {
    // use destructuring to add many product
    const { name, image, summery, cost, _id, rating, country, city, restname, street } = props.product;
    // const url = `/details/${_id}`;
    return (

        <div className="col-lg-4 col-md-6 col-12">
            <div className="card mb-5">
                <div className="card-head">
                    <img src={imgba} alt="logo" className="card-logo" />
                    <img id="imS" height="200px" width="200px" src={image} alt="Shoe" className="product-img" />
                    <div className="product-detail">
                        <h2>Diamond</h2> Support and Diamond restora come together for a more supportive feel with high-speed responsiveness
                    </div>
                    <span className="back-text">
                        DIAMOND
                    </span>
                </div>
                <div className="card-body">
                    <div className="product-desc">
                        <span className="product-title">
                            <b>{name}</b>
                            <span className="badge">
                                New
                            </span>
                        </span>
                        <span className="product-caption">
                            <strong> Diamond Food Collection</strong>
                            <p>{summery}</p>
                        </span>
                        <div>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color "
                                fullSymbol="fas fa-star icon-color "
                                readonly

                            />
                        </div>
                    </div>
                    <div className="product-properties">
                        <span className="product-size">
                            <h4><strong>{restname}</strong></h4>
                            <h4>{country} , {city},{street}</h4>
                        </span>
                        <span className="product-price">
                            $<b>{cost}</b>
                            <Link to={`/placeorder/${_id}`}><button className="btn-p">Purchage</button></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowMinProd;
