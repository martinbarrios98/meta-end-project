import React, { createContext, useEffect, useState } from 'react'

import { contact, socialMedia, urls } from './defaults';
import dataProducts  from '../base/data/products.json'
import dataTestimonials  from '../base/data/testimonials.json';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [ urlsNav ] = useState([...urls]);
    const [ urlContact ] = useState([...contact]);
    const [ urlSocialMedia ] = useState([...socialMedia]);
    const [ products ] = useState([...dataProducts.products]);
    const [ testimonials ] = useState([...dataTestimonials.testimonials]);
    const [ show, setShow ] = useState(false);
    const [ userConfirmation, setUserConfirmation ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        time: '',
        occasion: '',
        success: false
    });

    const handleShowCartFn = () => setShow( show ? false : true );

    const handleClickNavigate = () => setShow(false);

    const handleSetConfirmation = ( userConfirmation ) => setUserConfirmation({...userConfirmation});

    const handleCheckStorage = () => {

        const userConfirmationStorage = sessionStorage.getItem('userConfirmationStorage');

        if(!userConfirmation) return;

        try {
            const parseUserConfirmationStorage = JSON.parse(userConfirmationStorage);
            handleSetConfirmation(parseUserConfirmationStorage)
        } catch (error) {}

    }

    const handleResetUserConfirmation = () => {
        setUserConfirmation({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            date: '',
            guests: '',
            time: '',
            occasion: '',
            success: false
        });
        sessionStorage.removeItem('userConfirmationStorage');
    }

    useEffect(() => {
        handleCheckStorage();
    }, []);

    const values = {
        urlsNav,
        urlContact,
        urlSocialMedia,
        products,
        testimonials,
        show,
        userConfirmation,
        handleShowCartFn,
        handleClickNavigate,
        handleSetConfirmation,
        handleResetUserConfirmation
    }

    return (  
        <AppContext.Provider
            value={values}
        >{children}</AppContext.Provider>
    );
}
 
export default AppProvider;