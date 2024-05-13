import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from "react-helmet-async";
import FeaturedFoodsHome from '../FeaturedFoodsHome/FeaturedFoodsHome';
import { useLoaderData } from 'react-router-dom';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import ServicesSection from '../ServicesSection/ServicesSection';
// import { Zoom } from "react-awesome-reveal";
// import SubcategoryCraftCard from '../SubcategoryCraftCard/SubcategoryCraftCard'

const Home = () => {
    const craftItem = useLoaderData();
    const [craftSubcategoryItems, setCraftSubcategoryItems] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect(() => {
    //     // Fetch data from the API when the component mounts
    //     fetch('https://users-management-server-five.vercel.app/craftSubcategory')
    //         .then(response => response.json())
    //         .then(data => setCraftSubcategoryItems(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };


    return (
        <div className={isDarkMode ? "bg-slate-300" : "bg-white"}>
           

            <Banner></Banner>
            <FeaturedFoodsHome></FeaturedFoodsHome>
            <TestimonialsSection></TestimonialsSection>
            <ServicesSection></ServicesSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
            </div>
            <div className='flex flex-wrap justify-center gap-24'>
                {/* {craftSubcategoryItems.map(craft => (
                    <div key={craft._id} className='flex flex-col items-center mx-4 my-2'>
                        <SubcategoryCraftCard craft={craft} />
                    </div>
                ))} */}
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
