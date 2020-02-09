import React from 'react';

interface IPropProps {
    name:string,
    color:string
}

export class PropsComponent extends React.Component<IPropProps,any> {
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
                <p>My favorite color is {this.props.color}</p>
            </div>
        )
    }
}