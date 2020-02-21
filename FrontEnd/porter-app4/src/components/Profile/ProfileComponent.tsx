import React from 'react';
// import { ProfileFeedDisplay } from './ProfileFeedDisplay';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

interface IProfileProps {
    currentProfile: any[]
}

export class ProfileComponent extends React.Component<IProfileProps> {

    componentDidMount() {
        if(this.props.currentProfile.length === 0) {
            console.log("user is empty?")
        }
    }

    render() {

        return (
            <div>
                <Card>
                    <CardBody>
                        <CardText>{this.props.currentProfile}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

}