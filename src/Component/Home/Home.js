import React from 'react';
import Search from '../Search/Search';
import WhyUs from '../WhyUs/WhyUs';
import Footer from '../Footer/Footer';
import Food from '../Food/Food';


const Home = () => {
    return (
        <div>
            <Search></Search>
            <Food></Food>
            <WhyUs></WhyUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;