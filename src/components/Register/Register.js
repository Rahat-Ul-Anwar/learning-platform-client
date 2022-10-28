 
import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

 
const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password, photoURL,name)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
        }).catch(error => {
            console.error('error', error);
            setError(error.message);
        });
    

       
        
    }
    return (
        <div className='mx-auto w-50'>
              <h3 className='text-center'>Sign Up</h3>
             <Form onSubmit={handleSubmit} className='mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" />
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="photo url" />
                
                </Form.Group>
                    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                
                <div className='d-grid'>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                 </div>
                <Form.Text className="text-muted mt-4">
                    Already have an account? please, <Link to='/login'>Log In</Link>
                </Form.Text>
                <Form.Text className="text-danger text-center mt-4">
                    <h6>{error}</h6>
                </Form.Text>
      </Form>
       </div>
    );
};

export default Register;