import React from 'react'

import useApp from '../../hooks/useApp';

import OrderDetails from './OrderDetails';
import Error from './Error'


const Confirmation = () => {

    const { userConfirmation } = useApp();

    return (  
        <main className='py-32' >
            { userConfirmation.success ? <OrderDetails user={userConfirmation} /> : <Error /> }
        </main>
    );
}
 
export default Confirmation;