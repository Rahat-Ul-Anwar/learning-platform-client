import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseList from '../CourseList/CourseList';

const Courses = () => {
    const courses = useLoaderData();
  
  
    
    return (
        <Container>
            <Row>
                <Col lg="3" sm="1">
                    <CourseList courses={courses}></CourseList>
                </Col>
                <Col lg="9" sm="1">
                    <Row>
                        <Col className='col-lg-4'>
                        {
                 
                             courses.map(course => <Course key={course.id} course={course}>
           
                      
                        </Course>)

                 }
                        </Col>
                   </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;