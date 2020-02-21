import React, { SyntheticEvent } from 'react';
import { Input, Form } from 'reactstrap';
import { publishPost } from '../../utilities/api';
import { Link } from 'react-router-dom';
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
            likenumber: 0,
            user_posts: this.props.user
        });
        history.push('/postfeed');
    }

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
                <Link to='/postfeed'>Posts</Link>

            </div>
        )
    }
}
export default PostSubmit;
