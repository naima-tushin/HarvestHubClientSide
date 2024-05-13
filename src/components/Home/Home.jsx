import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from "react-helmet-async";
import FeaturedFoodsHome from '../FeaturedFoodsHome/FeaturedFoodsHome';
import { useLoaderData } from 'react-router-dom';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import ServicesSection from '../ServicesSection/ServicesSection';


const Home = () => {
    const allFood = useLoaderData();
    return (
        <div >
            <Banner></Banner>
            {/* Featured Foods */}
            <FeaturedFoodsHome allFood={allFood} /> 
            <TestimonialsSection></TestimonialsSection>
            <ServicesSection></ServicesSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
            </div>
            <div>
                <Helmet>
                    <title>Harvest Hub | Home</title>
                </Helmet>
            </div>
        </div>
    );
};

export default Home;
