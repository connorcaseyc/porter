import React from 'react';
import { PostFeedDisplay } from './PostFeedDisplay';
import { Card } from 'reactstrap';
import { getPostList } from '../../utilities/api';

interface IPostFeedProps {
    posts: any[]
}

export class PostFeedComponent extends React.Component<IPostFeedProps> {

    constructor(props: IPostFeedProps) {
        super(props)
        this.state = {
            getPostList
        }
    }

    render() {
        const displayFeed: PostFeedDisplay[] = this.props.posts.map<any>((posts: any) => {
            return <PostFeedDisplay id={posts.id} 
            textpost={posts.textpost}
            photopost={posts.photopost}
            timesubmit={posts.timesubmit}
            user_posts={posts.user_posts} 
            />
        })

        return (
            <>
                <Card>
                    {displayFeed}
                </Card>
            </>
        )
    }
}