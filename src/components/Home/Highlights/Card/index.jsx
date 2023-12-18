import React from 'react'

import { MdDeliveryDining } from "react-icons/md";

import greekSaladImg from "../../../../assets/greek-salad.jpg";
import bruchettaImg from "../../../../assets/bruchetta.jpg";
import lemonDessertImg from "../../../../assets/lemon-dessert.jpg";

const Card = ({ product }) => {

    const { id, name, description, price } = product;

    const handleSetImageProduct = () => {
        switch (id) {
            case 1:
              return greekSaladImg;
            case 2:
              return bruchettaImg;
            case 3:
              return lemonDessertImg;
        }
    }
 
    return (  
        <article className='bg-tertiary shadow-sm rounded-xl md:basis-[49%] lg:basis-[32%]' >
            <div>
                <img 
                    src={handleSetImageProduct()}
                    title={name}
                    alt={`Image ${name}`}
                    loading='lazy'
                    className='object-cover w-full h-56 max-h-56 rounded-t-xl'
                />
            </div>
            <div className='py-6 px-4 flex flex-col gap-5' >
                <p className='flex justify-between font-bold font-heading text-3xl' >
                    {name}
                    <span className='text-accent-primary font-body text-[18px]' >
                        {price}
                    </span>
                </p>
                <p className='text-justify' >{description}</p>
                <p className='font-bold flex gap-3 items-center cursor-pointer' >
                    Order a delivery
                    <MdDeliveryDining 
                        fontSize={'22px'}
                        color='#000000'
                    />
                </p>
            </div>
        </article>
    );
}
 
export default Card;