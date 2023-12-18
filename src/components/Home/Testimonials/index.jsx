import React from 'react'
import useApp from '../../../hooks/useApp';
import Testimonial from './Testimonial';


const Testimonials = () => {

    const { testimonials } = useApp();

    return (  
        <section className='bg-secondary py-7' >
            <div className='max-w-4xl w-[95%] mx-auto my-10' >
                <h2 className='text-white font-heading text-5xl font-medium text-center' >Testimonials</h2>
                <ul className='flex flex-col gap-5 mt-10 md:flex-row md:flex-wrap md:justify-between' >
                    {
                        testimonials.map( (testimonial, i) => (
                            <Testimonial 
                                key={i}
                                testimonial={testimonial}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
 
export default Testimonials;