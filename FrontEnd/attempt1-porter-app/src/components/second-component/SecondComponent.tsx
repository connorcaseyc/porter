import React from 'react';

export class SecondComponent extends React.Component<any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
            name: 'Ccc',
            number: 3
        }
    }

    render() {
        return (
            <div>
                <h3>Second Component</h3>
                <p>The name is: {this.state.name}</p>
                <p>The number is: {this.state.number}</p>
            </div>
        )
    }
}