import React from 'react';
import IPost from '../model/IPost';

export interface IPR {
    post: IPost
}

export const PostRow:React.FC<IPR> = (props:IPR) => {
    return (
        <>
            {/* <tr key={props.post.id}> */}
            <tr>
                <td>
                    {props.post.id}
                </td>
                <td>
                    {props.post.textpost}
                </td>
                <td>
                    {props.post.photopost}
                </td>
                <td>
                    {props.post.user_posts}
                </td>
            </tr>
        </>
    )
}
export default PostRow;