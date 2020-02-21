import React from 'react';
import { Card, CardHeader, CardSubtitle, CardBody, CardText } from 'reactstrap';

interface IProfileDisplayProps {
    userpost: any
}

export class ProfileFeedDisplay extends React.PureComponent<any> {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardHeader>PORTER POSITE</CardHeader>
                    <CardSubtitle></CardSubtitle>
                    <CardText>post body</CardText>
                </CardBody>
            </Card>
        )
    }
}