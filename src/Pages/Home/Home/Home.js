import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Designer from '../Our Designer/Designer';
import Partners from '../Partmers/Partners';
import Banner from '../Banner/Banner';
import MinProduct from '../../MinProduct/MinProduct';
import './Home.css';
import ShowReview from '../../ShowReview/ShowReview';


const Home = () => {
    return (
        <div className='ba-color'>
            <Navigation></Navigation>
            <Banner></Banner>
            <MinProduct></MinProduct>
            <Partners></Partners>
            <Designer></Designer>
            <ShowReview></ShowReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;