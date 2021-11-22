import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import imgba from '../../../image/logo.jpg';
const AllProducts = () => {
    // import state
    const [products, setProducts] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    // handle delete function
    const handleDelproducts = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = products.filter(product => product._id !== id);
                        setProducts(remainUser);
                    }
                })
        }
    }



    return (
        <div className="container cont-bak mt-5">
            <h1 style={{ color: "white" }} id="h1provided" >Manage Items</h1>
            <h1 style={{ color: "white" }}>length: {products.length}</h1>
            <div id="service-back" className="row row-cols-1 row-cols-md-3 g-4">
                {

                    products.map(product => <div className="col-lg-4 col-md-6 col-12"
                        key={product._id}
                        product={product}

                    >
                        <div className="card mb-5">
                            <div className="card-head">
                                <img src={imgba} alt="logo" className="card-logo" />
                                <img id="imS" height="200px" width="200px" src={product.image} alt="Shoe" className="product-img" />
                                <div className="product-detail">
                                    <h2>Diamond</h2> Support and Diamond collection come together for a more supportive feel with high-speed responsiveness
                                </div>
                                <span className="back-text">
                                    DIAMOND
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="product-desc">
                                    <span className="product-title">
                                        <b>{product.name}</b>
                                        <span className="badge">
                                            New
                                        </span>
                                    </span>
                                    <span className="product-caption">
                                        <strong> Diamond Brand Collection</strong>
                                        <p>{product.summery}</p>
                                    </span>
                                    <div>
                                        <Rating
                                            initialRating={product.rating}
                                            emptySymbol="far fa-star icon-color "
                                            fullSymbol="fas fa-star icon-color "
                                            readonly

                                        />
                                    </div>
                                </div>
                                <div className="product-properties">
                                    <span className="product-size">
                                        <h4>Size</h4>
                                        <ul className="ul-size">
                                            <li><a href="www.youtube.com">7m</a></li>
                                            <li><a href="www.youtube.com">8m</a></li>
                                            <li><a href="www.youtube.com">9m</a></li>
                                            <li><a href="www.youtube.com" className="active">10m</a></li>
                                            <li><a href="www.youtube.com">11m</a></li>
                                        </ul>
                                    </span>
                                    <span className="product-price">
                                        $<b>{product.cost}</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <Button variant="contained" onClick={() => handleDelproducts(product._id)} >Delete</Button>
                    </div>

                    )}

            </div>

        </div>

    );
};

export default AllProducts;