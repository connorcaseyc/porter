import React from 'react';
import { Link } from 'react-router-dom';

export class Landing extends React.Component {
    render() {
        return (
            <div>
                <h3>Landing page</h3>
                <Link to='/userlist'>User List</Link>
                <br/>
                <Link to='/adduser'>Add New User</Link>
                <br/>
                <Link to='/postfeed'>Posts</Link>
                <br/>
                <Link to='/addpost'>Add New Post</Link>
                <br/>
                <Link to='/login'>Login</Link>
                <br/>
                <Link to='search'>Search</Link>
            </div>
        )
    }
}
