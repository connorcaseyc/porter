import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getUserList } from '../utilities/api';
import { IUser } from '../model/IUser';
import { UserRow } from './UserRow';

export const UserTable:React.FC<any> = (props:any) => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        getUserList().then(r=>setUserList(r.data));
    }, [userList.length]);

    return (
        <Table>
            <tbody>
                {userList.map((r:IUser) => <UserRow key={r.id} user={r}/>)}
            </tbody>
        </Table>
    )
}
export default UserTable;