import React, { useEffect, useState, SyntheticEvent } from 'react';
import { Table, Button } from 'reactstrap';
import { getPostList } from '../utilities/api';
import IPost from '../model/IPost';
import { PostRow } from './PostRow';
import { Link } from 'react-router-dom';

export const PostTable:React.FC<any> = (props:any) => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        getPostList().then(r=>setPostList(r.data));
    }, [postList.length]);

    sessionStorage.removeItem("user");
    

    return (
        <div>
            {/* <button onClick={sessionStorage.removeItem("user")}></Button> */}
            <Table>
                <tbody>
                    {/* {postList.map((r:IPost) => <PostRow key={r.id} post={r}/>)} */}
                    {postList.map((r:IPost) => <PostRow post={r}/>)}
                </tbody>
            </Table>
            <Link to='/'>Landing</Link>
            <Link to='/addpost'>Add New Post</Link>
        </div>
    )
}
