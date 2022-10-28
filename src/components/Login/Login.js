 
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
 
 
 
 

const Login = () => {

    const {  signIn, providerLogIn, githubLogIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    
    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                 form.reset();
                setError('');
                navigate(from, {replace : true})

            }).catch(error => {
                console.error('error', error);
                setError(error.message);
                
            });

         
    }
    const handleGoogleSignIn = () => {
    
            providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(error => console.log('error', error));
    }
    
    const handleGithubSignIn = () => {
        githubLogIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(error => console.error(error));
        
    }

    

    
    return (
        <div className='mx-auto w-50'>
            <h3 className='text-center'>Log In</h3>

            <Form onSubmit={handleLogIn} className='mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                
                <div className='d-grid'>
                <Button variant="primary" type="submit" className='mb-3'>
                    Log In
                </Button>
                    <Button onClick={handleGoogleSignIn} variant="danger" type="submit" className='mb-3'>
                 <FaGoogle></FaGoogle> Continue with Google
                </Button>
                    <Button onCLick={handleGithubSignIn} variant="secondary" type="submit" className='mb-3'>
                 <FaGithub></FaGithub> Continue with Github
                </Button>
                 </div>
                <Form.Text className="text-muted d-block">
                  New to the Account? please <Link to='/register'>Sign Up</Link>
                </Form.Text>
                <Form.Text className="text-danger text-center mt-4">
                    <h6>{error}</h6>
                </Form.Text>
      </Form>
        </div>
    );
};

export default Login;