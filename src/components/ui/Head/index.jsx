import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom'
import useApp from '../../../hooks/useApp';

const Head = () => {

    const location = useLocation();
    
    const { urlsNav } = useApp();

    const [ title, setTitle ] = useState('');
    

    const handleSetTitle = () => {

        const extrasUrl = [{ 
            url: '/confirmation',
            tittle: 'Confirmation'
         }]

        const isLocation = [...urlsNav,...extrasUrl].find( url => url.url === location.pathname );

        console.log(isLocation);

        setTitle(isLocation.tittle);

    }

    useEffect( () => {

        handleSetTitle();

    }, [location]);

    return (  
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content="Welcome Little Lemon" />
            <meta property="og:url" content={window.location.href} />
        </Helmet>
    );
}
 
export default Head;