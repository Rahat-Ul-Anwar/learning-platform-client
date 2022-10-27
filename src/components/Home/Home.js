import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../assets/Cs.jpg';

const Home = () => {
    return (
        <div>
           
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col lg='8'>
                        <Image
                            src={banner}
                            className="img-fluid"
                        ></Image>
                     
                    </Col>
                    <Col lg="4">
                    <h4 className='p-3'>
                        A computer engineer fuses electrical engineering and computer science to develop new technology. Computer engineers design, build, and maintain hardware in modern computers. These engineers focus on integrating hardware and software in a unified system safely and efficiently.
                    </h4>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;