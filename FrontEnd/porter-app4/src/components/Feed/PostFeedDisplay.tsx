import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { IUser } from '../../model/IUser';

interface IPostProps {
    id: number;
    textpost: string;
    photopost: string;
    timesubmit: string;
    user_posts: IUser;
}

export class PostFeedDisplay extends React.PureComponent<IPostProps> {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Porter Post</CardTitle>
                    <CardSubtitle>{this.props.user_posts}</CardSubtitle>
                    <CardText>{this.props.textpost}</CardText>
                    {/* <CardText>{this.props.photopost}</CardText> */}
                </CardBody>
            </Card>
        )
    }
}