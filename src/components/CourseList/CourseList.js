import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
     
    
      
    return (
        <div>
            <h4 className='text-center'>Course List</h4>

            <ListGroup className="p-5 bg-dark">
          

    {
        courses.map(course => <Link to={`/courses/${course.id}`}><ListGroupItem className='mb-3'>{course.name}
                    
                    </ListGroupItem></Link>)
    }
            </ListGroup>
      </div>
    );
};

export default CourseList;