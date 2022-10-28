import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Checkout = () => {

    const { user } = useContext(AuthContext);
    console.log('user', user);
    return (
        <div className='text-center'>
            <h3>Name: {user.displayName}</h3>
            <p> Email: {user.email}</p>
             
        </div>
    );
};

export default Checkout;