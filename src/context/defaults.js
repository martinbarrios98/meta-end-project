import Home from "../components/Home";
import Error from "../components/ui/Error";
import Reservations from "../components/Reservations";

export const urls = [
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

export const contact = [
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
];

export const socialMedia = [
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