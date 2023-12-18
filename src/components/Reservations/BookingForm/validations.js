import * as Yup from 'yup';

export const validationsForm = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Must be at least 2.')
        .max(20, 'Please limit your input to 20 characters or less.')
        .required('First Name is required'),
    lastName: Yup.string()
        .min(2, 'Must be at least 2.')
        .max(20, 'Please limit your input to 20 characters or less.')
        .required('Last Name is required'),
    email: Yup.string()
        .email('Please enter a valid name.')
        .required('Email is required'),
    date: Yup.string()
        .required('Date is required'),
    time: Yup.string()
        .required('Time is required'),
    occasion: Yup.string()
        .required('Occasion is required'),
    guests: Yup.number()
        .min(1, 'Must be at least 1.')
        .required('Guests is required'),
    phone: Yup.string()
        .min(9, 'Must be at least 9.')
        .required('Phone is required ')
});