import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

import Loader from '../ui/Loader';

import { validationsForm } from './BookingForm/validations';
import { useFormik } from 'formik';
import BookingForm from './BookingForm';
import useApp from '../../hooks/useApp';

const Reservations = () => {

    const { handleSetConfirmation } = useApp();
    const navigate = useNavigate();

    const [ loading, setLoading ] = useState(false);

    const handleFormSubmit = async (userData) => {
        setLoading(true);
        try {
          await new Promise(resolve => setTimeout(() => {
            resolve(true);
          }, 2000));
      
          const isSuccess = Math.random() > 0.5;
          if (isSuccess) {
            handleSetConfirmation({
                ...userData,
                success: true
            });
            toast.success('Your table has been booked! :)');
            sessionStorage.setItem('userConfirmationStorage', JSON.stringify({...userData, success: true}))
            handleReset();
            navigate('/confirmation');
          } else {
            handleSetConfirmation({
                ...userData,
                success: false
            });
            toast.error('Oops!, Something went wrong :(')
          }
        } catch (error) {
            handleSetConfirmation({
                ...userData,
                success: false
            });
            toast.error('Oops!, Something went wrong :(')
        } finally{
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            date: '',
            guests: '',
            time: '',
            occasion: ''
        },
        validationSchema: validationsForm,
        onSubmit: values => {
            handleFormSubmit(values);
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset } = formik;


    useEffect(() => {
        sessionStorage.removeItem('userConfirmationStorage');
    }, []);

    return (  
        <main className={`min-h-screen px-4 pt-32 pb-6 flex flex-col`} >
            <h1 className="text-5xl font-bold font-heading text-center">
                Reservations
            </h1>
            <BookingForm 
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleReset={handleReset}
                handleSubmit={handleSubmit}
            />
            {loading ? <Loader /> : null}
        </main>
    );
}
 
export default Reservations;