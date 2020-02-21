import React, { useEffect, useState } from 'react';
import { Card } from 'reactstrap';
import { getPostList } from '../../utilities/api';
import IPost from '../../model/IPost';
import { CardRow } from './CardRow';
import { Link } from 'react-router-dom';

export const CardFeed:React.FC<any> = (props:any) => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        getPostList().then(r=>setPostList(r.data));
    }, [postList.length]);

    sessionStorage.removeItem("user");
    

    return (
        <div>
            {/* <button onClick={sessionStorage.removeItem("user")}></Button> */}
            <Card>
                {postList.map((r:IPost) => <CardRow post={r}/>)}
            </Card>
            
            <Link to='/'>Landing</Link>
            <Link to='/addpost'>Add New Post</Link>
            
           
        </div>
    )
}
