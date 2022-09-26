import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ZoomIn } from 'react-bootstrap-icons';

import HelpTooltip from './HelpTooltip';

type DashBlockProps = {
    title: string,
    helpText?: string,
    shortName: string,
    showDetail: (show: boolean, blockShortName: string) => void,
}

class DashboardBlock extends React.Component<DashBlockProps> {
    constructor(props: DashBlockProps) {
        super(props);
    }

    render() {
        // only display help text if it is provided
        return (
            <Card className="my-3">
                <Card.Body>
                    <Row className="">
                        <Col xs={10}>
                            <Card.Title >
                                {this.props.title}
                                {" "}
                                <button className="btn btn-link text-decoration-none m-0 p-0 pb-1" onClick={() => this.props.showDetail(true, this.props.shortName)}><ZoomIn size={15} /></button>
                            </Card.Title>
                        </Col>

                        {this.props.helpText ?
                            <Col xs={2} className="text-end">
                                <HelpTooltip helpText={this.props.helpText} />
                            </Col>
                            : null}
                    </Row>
                    {this.props.children}
                </Card.Body>
            </Card>
        )
    }
}

export default DashboardBlock;