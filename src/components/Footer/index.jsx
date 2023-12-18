import React from 'react'

import LogoLight from '../../assets/LogoLight.svg';
import ListNav from '../ui/ListNav';
import ListContact from '../ui/ListContact';
import ListSocial from '../ui/ListSocial';

const Footer = () => {
    return (  
        <footer className='bg-dark py-6' >
            <div className='max-w-4xl w-[95%] my-0 mx-auto md:flex md:justify-between md:gap-8' >
                <div className='flex items-center justify-center mt-3 mb-10' >
                    <img 
                        src={LogoLight}
                        alt='Logo Little Lemon'
                        title='Little Lemon'
                        className='self-center'
                        width={250}
                    />
                </div>
                <nav className='my-2 flex flex-col gap-8 md:flex-row md:items-start md:flex-[2] md:justify-evenly' >
                    <ListNav section={'footer'} />
                    <ListContact />
                    <ListSocial />
                </nav>
            </div>
        </footer>
    );
}
 
export default Footer;