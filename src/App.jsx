import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import { urls } from './context/defaults';
import Home from './components/Home';
import Confirmation from './components/Confirmation';

const App = () => {
    return (  
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Layout />}
                >
                    <Route index element={<Home />} />
                    {
                        urls.slice(1, 6).map( (url, i) => (
                            <Route 
                                key={i}
                                path={url.url}
                                element={<url.element />}
                            />
                        ) )
                    }
                    <Route 
                        path='/confirmation'
                        element={<Confirmation />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;