import React, { useState } from 'react';
import { Input, Form } from 'reactstrap';
import { publishUser } from '../utilities/api';

export const UserSubmit:React.FC<any> = (props:any) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Form onSubmit={()=>publishUser({
            id:0,
            firstname:firstname,
            lastname:lastname,
            username:username,
            password:password,
            email:email
        }).then(r=>console.log(r.data))}>
            
            <Input type="text" placeholder="Firstname" onChange={val=>setFirstname(val.target.value)}/>
            <Input type="text" placeholder="Lastname" onChange={val=>setLastname(val.target.value)}/>
            <Input type="text" placeholder="Username" onChange={val=>setUsername(val.target.value)}/>
            <Input type="password" placeholder="Password" onChange={val=>setPassword(val.target.value)}/>
            <Input type="email" placeholder="Email" onChange={val=>setEmail(val.target.value)}/>

        </Form>
    )
}
export default UserSubmit;