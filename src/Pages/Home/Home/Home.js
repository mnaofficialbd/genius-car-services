import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Services/>
            <Experts/>
        </div>
    );
};

export default Home;