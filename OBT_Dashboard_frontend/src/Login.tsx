import React from 'react';
import {Form, Button, Container, Card, Navbar, Nav} from 'react-bootstrap';

class Login extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Container className="">
                
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img src="Logo.png" height={25} /> Organisation Belt Toolkit (demo)</Navbar.Brand>
                        <Nav className="me-auto">
                        </Nav>
                    </Container>
                </Navbar>

                <div className="d-flex justify-content-around p-5" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/background_login.png'})`}}>
                    <Card style={{ width: '18rem', backgroundColor: 'rgba(200, 200, 200, 0.5)'}}>
                        <Card.Body>
                            <h1 className="d-flex justify-content-around">
                                LOGIN
                            </h1>
                            <Form.Group className="mb-3 d-flex justify-content-around" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex justify-content-around" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>
                            <div className="d-flex justify-content-around">
                                <a href="/" className="btn btn-primary" >Submit</a>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        )
    }
}

export default Login;