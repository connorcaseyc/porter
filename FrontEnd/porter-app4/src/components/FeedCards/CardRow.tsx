import React, { SyntheticEvent } from 'react';
import IPost from '../../model/IPost';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Form, Input, Button } from 'reactstrap';
import { addLike } from '../../utilities/api';
import { Link } from 'react-router-dom';
import { history } from '../../history/history';
import { IUser } from '../../model/IUser';
import { updateCurrentProfile } from '../../action-mappers/profile-action';

export interface IPR {
    post: IPost,
}

export interface IProfileState {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string,
    user_posts: any[],
    // profileuser: IUser

    // post: IPost

    // arr: any[]
}

interface IProfileProps {
    updateCurrentProfile: (u:string) => void
    profileMessage: string
}


export class CardRow extends React.Component<IPR, IProfileState, IProfileProps> {
        
    updateLikes = async (event: SyntheticEvent) => {

        event.preventDefault();

        // addLike({
        //     id: this.props.post.id,
        //     likenumber: this.props.post.likenumber,
        //     photopost: this.props.post.photopost,
        //     textpost: this.props.post.textpost,
        //     timesubmit: this.props.post.timesubmit,
        //     user_posts: this.props.post.user_posts
        // })
        // console.log(this.props.post);

        addLike(this.props.post);
        
    }

    goToProfile = async (event: SyntheticEvent) => {
        event.preventDefault();
        // this.updateProfile(updateCurrentProfile(this.props.post.user_posts.username));
        // userPosts();

        updateCurrentProfile(this.props.post.user_posts.username);

        console.log(this.props.post.user_posts.username);
        // getUsersPosts(this.props.post.user_posts.username);
        
        // userPosts(this.props.post.user_posts.username);
        // history.push(userPosts(this.props.post.user_posts.username)+'/profile');
        // history.push(userPosts(this.props.post.user_posts.username));
        // history.push(this.props.post.user_posts.username+'/profile');
        
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <Form onSubmit={this.updateLikes}>
                            <CardTitle>PORTER POSTIE</CardTitle>
                            <CardSubtitle key={this.props.post.user_posts.firstname}>
                                <Button onClick={this.goToProfile}>{this.props.post.user_posts.username}</Button>
                            </CardSubtitle>
                            <CardText key={this.props.post.textpost}>{this.props.post.textpost}</CardText>
                            <CardText key={this.props.post.photopost}>{this.props.post.photopost}</CardText>
                            <CardText key={this.props.post.likenumber}>Likes: {this.props.post.likenumber}</CardText>
                            <Input type="submit" value="Like"></Input>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}






// export const CardRow1:React.FC<IPR> = (props:IPR) => {


//     return (
//         <>
//             <Card>
//                 <CardBody>
//                     <CardTitle>Porter Postie</CardTitle>
//                     <CardSubtitle key={props.post.user_posts.firstname}>{props.post.user_posts.firstname}</CardSubtitle>
//                     <CardText key={props.post.textpost}>{props.post.textpost}</CardText>
//                     <CardText>Likes: {props.post.likenumber}</CardText>
//                     {/* <Button onClick={addLike(props.post)}>Like</Button> */}
                    
                    
//                     </CardBody>
                    
//                     </Card>
//         </>
//     )     
// export default CardRow;


//                 {/* <Form onSubmit={e=>{
//                     e.preventDefault();
//                     addLike(props.post);
//                 }}>
//                     <Input type="submit" value="Like" />
//                 </Form> */}

//                 {/* <CardText>{props.post.photopost}</CardText> */}
//                 {/* <Input type="textarea" placeholder="Comment"/>
//                 <Input type="submit" value="Submit"/> */}
//                 {/* <CardText>{props.post.post_comments}</CardText> */}