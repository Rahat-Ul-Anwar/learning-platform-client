import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
        <Accordion className='mx-auto w-75'>
            <Accordion.Item eventKey="0">
                <Accordion.Header> 1. What is Cors?</Accordion.Header>
                <Accordion.Body>
                 
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> 2. Why are you using firebase? What other option so you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                 
                    Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    <h5>The other opotion can be</h5>
                    <li>Supabase</li>
                    <li>Okta</li>
                    <li>PingIdentity</li>
                    <li>Keycloak</li>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> 3. How does the private route work?</Accordion.Header>
                <Accordion.Body>
                The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>4. what is node? How does node work?</Accordion.Header>
                <Accordion.Body>
                 
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                </Accordion.Body>
            </Accordion.Item>
    </Accordion>
    );
};

export default Blog;