import React from 'react'
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

import AppProvider from '../../context/AppContext';

import Header from '../Header';
import Footer from '../Footer';
import Head from '../ui/Head';

const Layout = () => {
    return (  
        <AppProvider>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Head />
            <Header />
            <Outlet />
            <Footer />
        </AppProvider>
    );
}
 
export default Layout;