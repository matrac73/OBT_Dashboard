import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { QuestionCircleFill } from 'react-bootstrap-icons';

type TooltipProps = {
    helpText: string,
}

class HelpTooltip extends React.Component<TooltipProps> {

    render() {
        return (
            <OverlayTrigger
                placement="auto"
                delay={{ show: 150, hide: 200 }}
                overlay={
                    <Tooltip id="button-tooltip">
                        {this.props.helpText}
                    </Tooltip>
                }
            >
                <QuestionCircleFill color="#9CA3AF" size={18}/>
            </OverlayTrigger >
        );
    }
}

export default HelpTooltip;