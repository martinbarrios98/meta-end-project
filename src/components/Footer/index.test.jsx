import Footer from ".";
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

const urlContact = [
    {
        tittle: "Phone number",
        url: "tel:+123456789",
    },
    {
        tittle: "Email",
        url: "mailto:littlelemon@example.com",
    },
    {
        tittle: "Address",
        url: "123 Main Street, Anytown USA 12345",
    }
]

const urlSocialMedia = [
    {
        tittle: "Twitter",
        url: "https://twitter.com/",
    },
    {
        tittle: "Instagram",
        url: "https://www.instagram.com/",
    },
    {
        tittle: "Facebook",
        url: "https://www.facebook.com/",
    }
]

describe("Footer", () => {
    test("Should render", () => {
        render(
            <AppContext.Provider
                value={{
                    urlsNav,
                    urlContact,
                    urlSocialMedia
                }}
            >
                <Router>
                    <Footer />
                </Router>
            </AppContext.Provider>
        );
        urlContact.forEach(( url ) => {
            expect(screen.getByText(url.tittle)).toBeDefined();
        });
        urlsNav.forEach(( url ) => {
            expect(screen.getByText(url.tittle)).toBeDefined();
        });
        urlSocialMedia.forEach(( url ) => {
            expect(screen.getByText(url.tittle)).toBeDefined();
        })
    })
})