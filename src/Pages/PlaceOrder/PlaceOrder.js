import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
// import hook--
import { useForm } from 'react-hook-form';

const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    // params id and state
    const { id } = useParams();
    const [item, setItem] = useState([])

    // this is for grtting id based use
    useEffect(() => {
        const url = `https://lit-crag-84316.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    // handle submitting data
    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;
        console.log(data);
        fetch('https://lit-crag-84316.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset()
                }
            })
    };

    return (
        <div className=' mt-5 ba-color-p'>
            <h1 className='mt-5'>Review Your Product</h1>
            <h3>ProductId: {id}</h3>
            <div className='row '>
                <div className="col-lg-6 col-md-12">
                    <img style={{ height: "250px", width: "300px", marginTop: "5px", borderRadius: "20px" }} src={item.image} alt="" />
                    <h1>{item.name}</h1>
                    <h2>Restaurant: {item.restname}</h2>
                    <h2>{item.country}</h2>
                    <h5>origin: {item.city} rating: {item.rating}</h5>
                    <p>{item.summery}</p>
                    <p>{item.info}</p>
                    <p>street: {item.street}</p>
                    <h4>Cost: $ {item.cost}</h4>
                    <Link to="/home"><button className='btn'>Go Home</button></Link>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h2>Please Place Your Order</h2>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={user.email} {...register("email")} />
                        <br />
                        <br />
                        {errors.email && <span className="error">This field is required</span>}
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={user.displayName} {...register("username")} />
                        <h4 className="text">Product name</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} defaultValue={id} {...register("orderid")} />
                        <h4 className="text">Your ordered id</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} type="text" defaultValue={item.name} {...register("productName", { required: true })} />
                        <h4>Your Shipping address</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} placeholder="Address" defaultValue="" {...register("address")} />
                        <h4>Your number</h4>
                        <input style={{ lineHeight: "40px", width: "75%" }} placeholder="phone number" defaultValue="" {...register("phone")} />
                        <br />
                        <input style={{ width: "30%" }} className="btn" type="Submit" value="Submit" />
                        <p>Please click 3 times carefully</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;