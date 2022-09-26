import React from 'react';

type KeyFigProps = {
    data: { figure: number, unit: string, description: string }[]
}

class KeyFigures extends React.Component<KeyFigProps> {
    constructor(props: KeyFigProps) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.data.map((item, i) =>
                    <li key={i}>{item.description} : {item.figure} {item.unit}</li>
                )}
            </ul>
        )
    }
}

export default KeyFigures;