import React, { SyntheticEvent } from 'react';
import { Input, Form } from 'reactstrap';
import { publishPost } from '../../utilities/api';
import { Link, Redirect } from 'react-router-dom';
import { history } from '../../history/history';

interface IPostSubmitProps {
    user: any
}

interface ITextpostState {
    textpost: string
}

export class PostSubmit extends React.Component<IPostSubmitProps, ITextpostState> {
    constructor(props:any) {
        super(props);
        this.state = {
            textpost:''
        };
    }

    updateTextpost = (event: any) => {
        this.setState({
            ...this.state,
            textpost: event.target.value
        })
    }

    submitTextpost = async (event: SyntheticEvent) => {
        event.preventDefault();
        publishPost({
            id:0,
            textpost:this.state.textpost,
            photopost: '',
            timesubmit: '', 
            user_posts: this.props.user
        });
        history.push('/postlist');
        // this.updateTextpost(this.state.textpost);
        
    }

    // const [textpost, setTextpost] = useState("");
    render() {
        return (
            <div>
                <Form onSubmit={this.submitTextpost}>

                    <Input 
                        required
                        type="textarea"
                        name="postbody"
                        placeholder="Enter your post here"
                        value={this.state.textpost}
                        onChange={this.updateTextpost}/>
                    
                    <Input type="submit" value="Submit"/>

                </Form>

                <Link to='/'>Landing</Link>
                <Link to='/postlist'>Posts</Link>

            </div>
        )
    }
}
export default PostSubmit;



// <div>
//                 <Form onSubmit={()=>publishPost({
//                     id:0,
//                     textpost,
//                     photopost,
//                     timesubmit: "", 
//                     user_posts: props.user

//                 }).then(r=>console.log(r.data))}>

//                     <Input required type="textarea" placeholder="Post Body" onChange={val=>setTextpost(val.target.value)}/>
//                     <Input type="image" placeholder="Photo" onChange={val=>setPhotopost(val.target.value)}/>
//                     <Input type="submit" value="Submit"/>

//                 </Form>

//                 <Link to='/'>Landing</Link>
//                 <Link to='/postlist'>Posts</Link>

//             </div>