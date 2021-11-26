import React, { useEffect, useState } from 'react';
import ShowAllProducts from '../ShowAllProducts/ShowAllProducts';
import './AllProducts.css';
const AllProducts = () => {
    // import state
    const [products, setProducts] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('https://lit-crag-84316.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className=" container cont-bak mt-5">
            <h1 style={{ color: "brown" }} id="h1provided" >Most Famous Food</h1>
            <h1 style={{ color: "brown" }}>length: {products.length}</h1>
            <div id="service-back" className="row row-cols-1 row-cols-md-3 g-4">
                {

                    products.map(product => <ShowAllProducts
                        key={product._id}
                        product={product}>
                    </ShowAllProducts>)
                    // we use Showservice function to import data
                }
            </div>

        </div>

    );
};

export default AllProducts;