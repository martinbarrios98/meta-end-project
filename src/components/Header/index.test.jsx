import Header from ".";
import Home from '../Home';
import Error from '../ui/Error';
import Reservations from '../Reservations';
import { MemoryRouter as Router } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import { AppContext } from "../../context/AppContext";

const urlsNav = [
    {
        url: '/',
        tittle: 'Home',
        target: '_self',
        element: Home
    },
    {
        url: '/about',
        tittle: 'About',
        target: '_self',
        element: Error
    },
    {
        url: '/menu',
        tittle: 'Menu',
        target: '_self',
        element: Error
    },
    {
        url: '/reservations',
        tittle: 'Reservations',
        target: '_self',
        element: Reservations
    },
    {
        url: '/order',
        tittle: 'Order Online',
        target: '_self',
        element: Error
    },
    {
        url: '/login',
        tittle: 'Login',
        target: '_self',
        element: Error
    }
]


describe("Footer", () => {
    test("Should render", () => {
        render(
            <AppContext.Provider
                value={{
                    urlsNav
                }}
            >
                <Router>
                    <Header />
                </Router>
            </AppContext.Provider>
        );
        urlsNav.forEach(( url ) => {
            expect(screen.getByText(url.tittle)).toBeDefined();
        });
    });
})