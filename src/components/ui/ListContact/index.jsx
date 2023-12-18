import React from 'react'
import useApp from '../../../hooks/useApp';

const ListContact = () => {

    const { urlContact } = useApp();

    return (  
        <ul className="flex flex-col gap-2 items-center justify-center px-0 md:items-start" >
            <li>
                <p
                    className='font-bold text-3xl text-white mb-3 font-heading'
                >
                    Contact
                </p>
            </li>
            {
                urlContact.map( (url, i) => (
                    <li
                        key={i}
                    >
                        <a
                            href={url.url}
                            title={url.tittle}
                            className="text-white"
                        >
                            {url.tittle}
                        </a>
                        </li>
                ))
            }
        </ul>
    );
}
 
export default ListContact;