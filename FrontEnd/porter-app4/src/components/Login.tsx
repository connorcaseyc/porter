import React, { SyntheticEvent } from 'react';
import { getUserList } from '../utilities/api';
import { IUser } from '../model/IUser';

interface ILoginState {
    username: string
    password: string 
}

interface ILoginProps {
    updateCurrentUser: (u:string, p:string) => void
    loginMessage: string
}

export class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props:any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername = (event:any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    updatePassword = (event:any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }
}