import React from 'react'
import { Link } from 'react-router-dom';
import useApp from '../../../hooks/useApp';
import Card from './Card';

const Menu = () => {

    const { products } = useApp();

    return (  
        <section className='max-w-4xl w-[95%] mx-auto mt-10 mb-10 lg:mt-[160px]' >
            <header className='flex gap-5 flex-col justify-between items-center md:flex-row' >
                <h2 className='text-5xl font-bold' >This week specials!</h2>
                <Link
                    to='/menu'
                    title='Menu'
                    target='_self'
                    className='btn-primary shadow-md'
                >
                    Online Menu
                </Link>
            </header>
            <ul className='mt-10 flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-3 md:justify-between' >
                {
                    products.map( (product, i) => (
                        <Card  product={product} key={i} />
                    ))
                }
            </ul>
        </section>
    );
}
 
export default Menu;