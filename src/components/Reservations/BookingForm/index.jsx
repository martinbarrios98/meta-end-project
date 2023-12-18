import React from 'react'


const BookingForm = ({ 
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit
}) => {
    return (  
        <form
            onSubmit={handleSubmit}
            className="flex flex-col py-7 gap-5 md:flex-row md:justify-between md:flex-wrap lg:w-[60%] lg:mx-auto"
        >
            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='firstName'className='font-bold' >First Name</label>
                <div className='flex flex-col gap-2' >
                    <input 
                        id='firstName'
                        name='firstName'
                        placeholder='John'
                        type='text'
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.firstName && touched.firstName  ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    { errors.firstName && touched.firstName ? <p className='text-red-500 text-sm pl-2' >{errors.firstName}</p> : null }
                </div>
            </div>    

            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='lastName' className='font-bold' >Last Name</label>
                <div className='flex flex-col gap-2' >
                    <input 
                        id='lastName'
                        name='lastName'
                        placeholder='Doe'
                        type='text'
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    { errors.lastName && touched.lastName ? <p className='text-red-500 text-sm pl-2' >{errors.lastName}</p> : null }
                </div>
            </div> 

            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='email' className='font-bold' >Email</label>
                <div className='flex flex-col gap-2' >
                    <input 
                        id='email'
                        name='email'
                        placeholder='johndoe@example.com'
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    { errors.email && touched.email ? <p className='text-red-500 text-sm pl-2' >{errors.email}</p> : null }
                </div>
            </div> 

            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='phone' className='font-bold' >Phone</label>
                <div className='flex flex-col gap-2' >
                    <input 
                        id='phone'
                        name='phone'
                        placeholder='(123) 456-7890'
                        type='tel'
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    { errors.phone && touched.phone ? <p className='text-red-500 text-sm pl-2' >{errors.phone}</p> : null }
                </div>
            </div> 

            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='date' className='font-bold' >Date</label>
                <div className='flex flex-col gap-2' >
                    <input 
                        id='date'
                        name='date'
                        type='date'
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.date && touched.date ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    { errors.date && touched.date ? <p className='text-red-500 text-sm pl-2' >{errors.date}</p> : null }
                </div>
            </div> 

            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='guests' className='font-bold' >Number of Guests</label>
                <div className='flex flex-col gap-2' >
                    <input 
                        id='guests'
                        name='guests'
                        placeholder='Select the number of guests'
                        type='number'
                        value={values.guests}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.guests && touched.guests ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    { errors.guests && touched.guests ? <p className='text-red-500 text-sm pl-2' >{errors.guests}</p> : null }
                </div>
            </div> 

            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='time' className='font-bold' >Time</label>
                <div className='flex flex-col gap-2' >
                    <select
                        id='time'
                        name='time'
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.time && touched.time ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value={''} >Select the time</option>
                        <option value={'18:00'} >18:00</option>
                        <option value={'19:00'} >19:00</option>
                        <option value={'20:00'} >20:00</option>
                        <option value={'21:00'} >21:00</option>
                        <option value={'21:00'} >22:00</option>
                    </select>
                    { errors.time && touched.time ? <p className='text-red-500 text-sm pl-2' >{errors.time}</p> : null }
                </div>
            </div> 

            <div className='flex flex-col gap-2 md:basis-[48%]' >
                <label htmlFor='occasion' className='font-bold' >Occasion</label>
                <div className='flex flex-col gap-2' >
                    <select
                        id='occasion'
                        name='occasion'
                        value={values.occasion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border p-2 rounded-lg outline-0 ${errors.occasion && touched.occasion ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value={''} >Select the occasion</option>
                        <option value={'Birthday'} >Birthday</option>
                        <option value={'Anniversary'} >Anniversary</option>
                        <option value={'Engagement'} >Engagement</option>
                        <option value={'Other'} >Other</option>
                    </select>
                    { errors.occasion && touched.occasion ? <p className='text-red-500 text-sm pl-2' >{errors.occasion}</p> : null }
                </div>
            </div> 

            <div
                className='mt-5 md:basis-[100%]'
            >
                <button
                    type='submit'
                    className={`btn-primary w-full 
                        ${ Object.values(errors).length || Object.values(values).includes('') ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
                    `}
                    disabled={Object.values(errors).length || Object.values(values).includes('') ? true : false}
                >Book table</button>
            </div>
        </form>
    );
}
 
export default BookingForm;