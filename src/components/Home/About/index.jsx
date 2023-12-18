import React from 'react'

import restaurantImg from "../../../assets/restaurant.webp";
import restaurantChefImg from "../../../assets/restaurant-chef.webp";

const About = () => {
    return (  
        <section className=" mx-auto mt-10 max-w-4xl flex flex-col gap-8 px-4 pt-6 pb-20 md:flex-row">
            <div className="space-y-2 flex flex-col items-start justify-center">
                <h2 className="text-5xl font-bold font-heading">About Us</h2>
                <p className="text-2xl">
                    We are a family owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
            </div>
            <div className="relative rounded-lg w-full">
                <img 
                    loading="lazy"
                    src={restaurantImg}
                    alt="Restaurant"
                    className="rounded-lg object-cover absolute right-4 w-1/2 h-72 shadow-xl"
                />
                <img 
                    loading="lazy"
                    src={restaurantChefImg}
                    alt="Restaurant Chef"
                    className="rounded-lg object-cover relative top-12 left-4 w-1/2 h-72 shadow-xl"
                />
            </div>
        </section>
    );
}
 
export default About;