import React from 'react';
import IPost from '../../model/IPost';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Input } from 'reactstrap';

export interface IPR {
    post: IPost
}

export const PostRow:React.FC<IPR> = (props:IPR) => {
    return (
        <>
            <tr key={props.post.id}>
            {/* <tr> */}
                <td key={props.post.id}>
                    {props.post.id}
                </td>
                <td key={props.post.textpost}>
                    {props.post.textpost}
                </td>
                <td key={props.post.photopost}>
                    {props.post.photopost}
                </td>
                <td key={props.post.timesubmit}>
                    {props.post.timesubmit}
                </td>
                <td key={props.post.user_posts.firstname}>
                    {props.post.user_posts.firstname}
                </td>
            </tr>
        </>
    )
}

export const PostCard:React.FC<IPR> = (props:IPR) => {
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle>Porter Postie</CardTitle>
                    <CardSubtitle key={props.post.user_posts.firstname}>{props.post.user_posts.firstname}</CardSubtitle>
                    <CardText key={props.post.textpost}>{props.post.textpost}</CardText>
                    {/* <CardText>{props.post.photopost}</CardText> */}
                </CardBody>
                <Input type="textarea" placeholder="Comment"/>
            </Card>
        </>
    )
}

export default PostRow;
