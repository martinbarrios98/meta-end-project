import React from 'react'

import BannerHero from '../../../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (  
        <section className='bg-secondary py-7 lg:py-5' >
            <div className='max-w-4xl w-[95%] mx-auto my-0 lg:flex lg:relative' >
                <article className='flex flex-col items-center justify-center gap-7 lg:items-start lg:basis-[50%]' >
                    <h1 className='font-heading font-medium text-primary text-5xl grid text-center lg:text-left' >
                        Little Lemon 
                        <span
                            className='text-white text-3xl'
                        >
                            Chicago
                        </span>
                    </h1>
                    <p className='text-white text-center lg:text-left' >We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link
                        to='/reservations'
                        title='Reservations'
                        target='_self'
                        className='btn-primary shadow-md'
                    >
                        Reserva a table
                    </Link>
                </article>
                <article className='hidden lg:flex lg:absolute lg:right-0' >
                    <img 
                        src={BannerHero}
                        alt='Banner Hero'
                        title='Little Lemon Chicago'
                        className='h-96 w-96 rounded-xl object-cover'
                        loading='lazy'
                    />
                </article>
            </div>
        </section>
    );
}
 
export default Hero;