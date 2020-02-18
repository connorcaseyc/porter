import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getUserList } from '../utilities/api';
import { IUser } from '../model/IUser';
import { UserRow } from './UserRow';
import { Link } from 'react-router-dom';

export const UserTable:React.FC<any> = (props:any) => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        getUserList().then((r: { data: React.SetStateAction<never[]>; })=>setUserList(r.data));
    }, [userList.length]);

    return (
        <div>
            <Table>
                <tbody>
                    {userList.map((r:IUser) => <UserRow key={r.id} user={r}/>)}
                </tbody>
            </Table>
            <Link to='/'>Landing</Link>
            <Link to='/adduser'>Add New User</Link>
        </div>
    )
}
export default UserTable;