import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {

    const info = useLoaderData();
    const { img, name, details, price } = info;
    return (
        <Card style={{ width: '500px' }} className='mx-auto'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                 {details}
                </Card.Text>
                <Card.Text>
                 Price : {price}$
                </Card.Text>
                <Button variant="primary" className='me-5'>Download Pdf</Button>
                <Button to='/checkout'variant="danger">Get Premium access</Button>

            </Card.Body>
    </Card>
       
    );
};

export default CourseDetails;