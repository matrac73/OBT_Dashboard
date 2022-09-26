import React from "react";
import { Container, Card } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

interface DetailProps {
    title: string,
    showDetail: (show: boolean, blockShortName: string) => void,
    children: React.ReactNode,
}

export default function Detail(props: DetailProps) {

    return (
        <Container fluid className="mt-3">
            <button className="btn btn-link text-decoration-none" onClick={() => props.showDetail(false, "")}><ArrowLeft className="align-bottom" size={20} /> Home</button>
            <Card className="my-3 p-3">
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <Container fluid style={{ width: "80%" }}>
                        {props.children}
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
}