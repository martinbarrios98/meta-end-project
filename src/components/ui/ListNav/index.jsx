import React from 'react'

import useApp from '../../../hooks/useApp';
import { Link } from 'react-router-dom';

const ListNav = ({ section }) => {

    const { urlsNav, handleClickNavigate } = useApp();

    const handleSetClassName = () => {
        switch (section) {
            case 'header':
                return 'flex flex-col gap-5 basis-[100%] px-5 lg:flex-row lg:justify-between lg:lg:gap-8 lg:px-0';
            case 'footer':
                return 'flex flex-col gap-2 items-center justify-center px-0 md:items-start'
            default:
                return '';
        }
    }

    const handleSetClassNameLink = () => {
        switch (section) {
            case 'header':
                return 'font-bold cursor-pointer hover:text-gray-500';
            case 'footer':
                return 'text-white'
            default:
                return '';
        }
    }

    return (  
        <ul className={handleSetClassName()} >
            {
                section === 'header' ? null :
                <li>
                    <p
                        className='font-bold text-3xl text-white mb-3 font-heading'
                    >
                        Navigation
                    </p>
                </li>
            }
            {
                urlsNav.map( (url, i) => (
                    <li
                        key={i}
                    >
                        <Link
                            to={url.url}
                            target={url.target}
                            title={url.tittle}
                            className={handleSetClassNameLink()}
                            onClick={() => handleClickNavigate()}
                        >
                            {url.tittle}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}
 
export default ListNav;