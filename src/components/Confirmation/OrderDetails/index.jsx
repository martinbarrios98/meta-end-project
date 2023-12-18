import React from 'react'

import imageSuccess from '../../../assets/success-filled.svg'
import { formatedDate } from '../../../helpers';
import { Link } from 'react-router-dom';
import useApp from '../../../hooks/useApp';

const OrderDetails = ({ user }) => {

    const { handleResetUserConfirmation } = useApp();

    return (  
        <section className='shadow-lg py-5 px-8 flex flex-col items-center justify-center bg-white my-10 max-w-xl mx-auto w-[95%] rounded-lg' >
            <div className='flex flex-col items-center gap-4 py-5' >
                <h1 className='text-green-600 font-heading text-5xl text-center font-bold' >Reservation Successful</h1>
                <img 
                    src={imageSuccess}
                    alt='Image Successful'
                    title='Imagen Successful'
                    className='w-[150px]'
                />
                <p className='text-center text-black font-bold text-xl' >Your table has been booked!</p>
            </div>
            <ul className='border-t py-4 w-full mt-3' >
                <li className='bg-slate-50 p-3 flex justify-between gap-1 rounded-lg' >
                    <p className='font-bold' >First Name</p>
                    <p>{user.firstName}</p>
                </li>
                <li className='p-3 flex justify-between gap-1' >
                    <p className='font-bold' >Last Name</p>
                    <p>{user.lastName}</p>
                </li>
                <li className='bg-slate-50 p-3 flex justify-between gap-1 rounded-lg' >
                    <p className='font-bold' >Phone</p>
                    <p>{user.phone}</p>
                </li>
                <li className='p-3 flex justify-between gap-1' >
                    <p className='font-bold' >Date</p>
                    <p>{formatedDate(user.date)}</p>
                </li>
                <li className='bg-slate-50 p-3 flex justify-between gap-1 rounded-lg' >
                    <p className='font-bold' >Guests</p>
                    <p>{user.guests} guests</p>
                </li>
                <li className='p-3 flex justify-between gap-1' >
                    <p className='font-bold' >Time</p>
                    <p>{user.time}</p>
                </li>
                <li className='bg-slate-50 p-3 flex justify-between gap-1 rounded-lg' >
                    <p className='font-bold' >Ocassion</p>
                    <p>{user.occasion}</p>
                </li>
                <li>
                    <Link 
                        to={'/'}
                        className='btn-secondary'
                        title='Home'
                        target='_self'
                        onClick={() => handleResetUserConfirmation()}
                    >Go back to home</Link>
                </li>
            </ul>
        </section>
    );
}
 
export default OrderDetails;