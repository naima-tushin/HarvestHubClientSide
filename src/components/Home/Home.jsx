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
            <button onClick={toggleTheme} className='my-4 text-right pr-6 w-full font-bold text-xl'>
                {isDarkMode ? "Light Theme 🔆" : "Dark Theme 🌙"}
            </button>

            <Banner></Banner>
            <FeaturedFoodsHome></FeaturedFoodsHome>
            <TestimonialsSection></TestimonialsSection>
            <ServicesSection></ServicesSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {/* {
                    craftItem.slice(0, 6).map(craftItems => (
                        <CraftItemsSection key={craftItems._id} craftItems={craftItems}></CraftItemsSection>
                    ))
                } */}

            </div>
            {/* <Zoom> */}
            <h1 className="text-center font-bold text-4xl text-[#322760] my-14">Art & Craft <span className='text-[#c54899]'>Categories</span></h1>
            {/* </Zoom> */}
            <div className='flex flex-wrap justify-center gap-24'>
                {/* {craftSubcategoryItems.map(craft => (
                    <div key={craft._id} className='flex flex-col items-center mx-4 my-2'>
                        <SubcategoryCraftCard craft={craft} />
                    </div>
                ))} */}
            </div>
            {/* {
                craftItem.slice(0, 1).map(craftItems => (
                    <PaintingDrawingSection key={craftItems._id} craftItems={craftItems}></PaintingDrawingSection>
                ))
            }
            {
                craftItem.slice(0, 1).map(craftItems => (
                    <Accordion key={craftItems._id} craftItems={craftItems}></Accordion>
                ))
            } */}

            <div>
                <Helmet>
                    <title>Harvest Hub | Home</title>
                </Helmet>
            </div>
        </div>
    );
};

export default Home;
