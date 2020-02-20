import React from 'react';
import IPost from '../model/IPost';

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
export default PostRow;