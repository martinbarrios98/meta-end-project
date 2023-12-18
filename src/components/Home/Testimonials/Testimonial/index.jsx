import React from 'react'

import starIcon from "../../../../assets/star.svg";
import personOneImg from "../../../../assets/person1.jpg";
import personTwoImg from "../../../../assets/person2.jpg";
import personThreeImg from "../../../../assets/person3.jpg";
import personFourImg from "../../../../assets/person4.jpg";

const Testimonial = ({ testimonial }) => {

    const { id, rating, name, review } = testimonial;

    const handleSetStarts = ( rt ) => {

        const array = [];

        for (let index = 0; index < rt; index++) {
            array.push(index);            
        }

        return(
            <ul className='flex gap-3 items-center' >
                {
                    array.map( ar => (
                        <li
                            key={ar}
                        >
                            <img 
                                src={starIcon}
                                alt='Start Rating'
                                title='Star Rating'
                            />
                        </li>
                    ))
                }
            </ul>
        )

    }

    const handleSetImageTestimonial = () => {
        switch (id) {
            case 1:
              return personOneImg;
            case 2:
              return personTwoImg;
            case 3:
              return personThreeImg;
            case 4:
              return personFourImg;
        }
    }

    return (  
        <article className='bg-tertiary rounded-lg shadow-lg p-4 flex flex-col gap-4 md:basis-[48%] lg:basis-[23%]' >
            <div className='flex gap-3' >
                <p className='font-bold text-lg' >{rating}</p>
                { handleSetStarts(rating) }
            </div>
            <div className='flex items-center gap-3' >
                <div>
                    <img 
                        src={handleSetImageTestimonial()}
                        alt={`Image ${name}`}
                        title={`${name}`}
                        className='object-cover rounded-full w-13 h-12'
                    />
                </div>
                <p className='font-bold md:text-[16px]' >{name}</p>
            </div>
            <p className='md:text-[16px]' >{review}</p>
        </article>
    );
}
 
export default Testimonial;