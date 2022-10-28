 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 
 
 
 

const Login = () => {

     
    
    
    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

         
}
    return (
        <Form onSubmit={handleLogIn} className='mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
      </Form>
    );
};

export default Login;