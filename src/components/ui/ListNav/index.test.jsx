import { beforeEach } from "vitest";
import ListNav from "./index";
import Home from '../../Home';
import Error from '../Error';
import Reservations from '../../Reservations';
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../context/AppContext";
import { MemoryRouter as Router } from "react-router-dom";

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

describe("ListNav", () => {
    beforeEach((ctx) => {
        ctx.urlsNav = [...urlsNav];
    })
    test("should render", ({ urlsNav }) => {
        render(
            <AppContext.Provider
                value={{
                    urlsNav
                }}
            >
                <Router>
                    <ListNav section={'header'} />
                </Router>
            </AppContext.Provider>
        );
        urlsNav.forEach(( url ) => {
            expect(screen.getByText(url.tittle)).toBeDefined();
        })
    });
})