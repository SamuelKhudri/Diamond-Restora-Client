import React, { useEffect, useState } from 'react';
import ShowMinProd from '../ShowMinPro/ShowMinProd';
// import ShowAllProducts from '../ShowAllProducts/ShowAllProducts';
import './MinProduct.css';
const MinProduct = () => {
    // import state
    const [products, setProducts] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container mt-5">
            <h1 style={{ color: "white" }} id="h1provided" >Choice Your Food</h1>
            <div id="service-back" className="row row-cols-1 row-cols-md-3 g-4">
                {

                    products.slice(0, 6).map(product => <ShowMinProd
                        key={product._id}
                        product={product}>
                    </ShowMinProd>)
                    // we use Showservice function to import data
                }
            </div>

        </div>

    );
};

export default MinProduct;