import Head from './index';
import Home from '../../Home';
import Error from '../Error';
import Reservations from '../../Reservations';

import React from 'react'

import { render, screen, createEvent } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";
import { beforeEach, describe, expect, test } from 'vitest';
import { AppContext } from '../../../context/AppContext';

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

describe("Head", () => {
    beforeEach((ctx) => {
        ctx.urlsNav = [...urlsNav];
    })
    test("Should render", ({ urlsNav }) => {
        render(
            <AppContext.Provider
                value={{
                    urlsNav
                }}
            >
                <Router>
                    <Head />
                </Router>
            </AppContext.Provider>
        );
        expect(document.title)
    })
})