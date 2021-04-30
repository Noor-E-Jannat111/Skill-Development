import React from 'react';
import Footer from '../../Footer/Footer';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import OurTeam from '../OurTeam/OurTeam'

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Works />
            <OurTeam/>
            <Feedback />
            <Footer />
        </>
    );
};

export default Home;