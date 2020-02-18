import React, { useState } from 'react';
import { Input, Form } from 'reactstrap';
import { publishPost } from '../utilities/api';
import { Link } from 'react-router-dom';
import { updateCurrentUser } from '../action-mappers/login-actions';

export const PostSubmit:React.FC<any> = (props:any) => {
    const [textpost, setTextpost] = useState("");
    const [photopost, setPhotopost] = useState("");

    return (
        <div>
            <Form onSubmit={()=>publishPost({
                id:0,
                textpost,
                photopost,
                timesubmit: "", 
                user_posts: null

            }).then(r=>console.log(r.data))}>

                <Input required type="textarea" placeholder="Post Body" onChange={val=>setTextpost(val.target.value)}/>
                <Input type="image" placeholder="Photo" onChange={val=>setPhotopost(val.target.value)}/>
                <Input type="submit" value="Submit"/>

            </Form>

            <Link to='/'>Landing</Link>
            <Link to='/postlist'>Posts</Link>

        </div>
    )
}
export default PostSubmit;