import React from 'react';
import { IUser } from '../model/IUser';

export interface IUR {
    user: IUser
}

export const UserRow:React.FC<IUR> = (props:IUR) => {
    return (
        <>
            <tr key={props.user.id}>
                <td>
                    {props.user.id}
                </td>
                <td>
                    {props.user.firstname}
                </td>
                <td>
                    {props.user.lastname}
                </td>
                <td>
                    {props.user.username}
                </td>
                <td>
                    {props.user.email}
                </td>
            </tr>
        </>
    )
}
export default UserRow;