import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class CustomNavBar extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img src="/Logo.png" height={25} /> Organisation Belt Toolkit (demo)</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href={require("./OBT_report.pdf")} download="OBT_report">Export</Nav.Link>
                        {/* <Nav.Link href="#home">Settings</Nav.Link> */}
                        <Nav.Link href="/login">Log out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default CustomNavBar;