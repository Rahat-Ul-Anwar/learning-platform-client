import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    
    const { name, id, details, img, price } = course;
       
    const navigate = useNavigate();

    const handleClick = () => {
         navigate(`/courses/${id}`);
        // console.log('clicked');
        
    }


    return (
                <Card style={{ width: '500px' }} className="m-2">
                    <Card.Img variant="top" src={img} style={{height:"200px"}}/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {details.length > 120 ? <p>{details.slice(0, 120) + '...'}</p>
                                    : <p>{details}</p>
                                }
                            </Card.Text>
                            <Card.Text>
                            <h6> Price : {price}$</h6>
                            </Card.Text>
                <Button onClick={handleClick} variant="primary">See More</Button>
                        </Card.Body>
                </Card>
    );
};

export default Course;