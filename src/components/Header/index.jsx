import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import useApp from '../../hooks/useApp';

import LogoSvg from '../../assets/Logo.svg';

import Icon from './Icon';
import ListNav from '../ui/ListNav';

const Header = () => {

    const navigate = useNavigate();

    const { show, handleShowCartFn, handleClickNavigate } = useApp();

    const handleNavigateHome = () => {
        navigate('/');
        handleClickNavigate();
    }

    return (  
        <>
            <header 
                className=' bg-white sticky top-0 z-[99] shadow-lg lg:py-7' 
            >
                <div className='w-[95%] max-w-4xl my-0 mx-auto flex justify-between flex-wrap lg:flex-row lg:items-center' >
                    <ul className="flex justify-between basis-[100%] py-6 lg:basis-[auto] lg:py-0 z-[100]" >
                        <div 
                            className='flex items-center justify-center cursor-pointer' 
                            onClick={() => handleNavigateHome()}
                            title='Home'
                        >
                            <img 
                                src={LogoSvg}
                                alt='Logo Little Lemon'
                                title='Little Lemon'
                            />
                        </div>
                        <div 
                            className='flex items-center justify-center lg:hidden' 
                            onClick={() => handleShowCartFn()}
                        >
                            { show ?  <Icon ElementIcon={IoClose} size={'30px'} color='#000000' /> : <Icon ElementIcon={FaBars} size={'30px'} color='#000000' /> }
                        </div>
                    </ul>
                    <nav className={`
                        flex items-start basis-[100%] h-[100vh] w-[100%] fixed top-[0] pt-[88px] left-0 transition-all duration-300 bg-white 
                        ${show ? 'opacity-100 block' : 'opacity-0 hidden'}
                        lg:static lg:opacity-100 lg:basis-[auto] lg:h-auto lg:w-auto lg:z-10 lg:pt-0 lg:block
                    `} >
                        <ListNav section={'header'} />
                    </nav>
                </div>
            </header>
        </>
    );
}
 
export default Header;