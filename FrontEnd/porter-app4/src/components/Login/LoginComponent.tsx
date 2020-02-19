import React, { SyntheticEvent } from 'react';
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { history } from '../../history/history';

export default interface ILoginState {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string
}

interface ILoginProps {
    updateCurrentUser: (u:string, p:string) => void
    loginMessage: string
}

export class LoginComponent extends React.Component<ILoginProps, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: 0,
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: ''
        }
    }

    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    //this is an example of event binding
    //we take an event created by a user, and use it to update data in our state
    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    // updateId = (event:any) => {
    //     this.setState({
    //         ...this.state,
    //         id: event.target.value
    //     })
    // }

    // updateFirstname = (event:any) => {
    //     this.setState({
    //         ...this.state,
    //         firstname: event.target.value
    //     })
    // }

    // updateLastname = (event:any) => {
    //     this.setState({
    //         ...this.state,
    //         lastname: event.target.value
    //     })
    // }

    // updateEmail = (event:any) => {
    //     this.setState({
    //         ...this.state,
    //         email: event.target.value
    //     })
    // }



    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault();
        this.props.updateCurrentUser(this.state.username,this.state.password);
        history.push('/postlist');
    }

    render() {
   
        return (
            <div id="landingpage">

                <div id="lefthalflanding">
                </div>

                <div id="righthalflanding">
                    <div id="spaceloginbar"></div>
                    <div id="rightloginbar">
                        <Form onSubmit={this.submitLogin}>
                            <Input 
                                required
                                type="text"
                                name="Username"
                                id="loginuname"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                            <Input 
                                required
                                type="password"
                                name="Password"
                                id="loginpword"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                            <Button id="loginbtn">Login</Button>
                        </Form>
                        <Link to ="/ForgottenPassword">Forgot Password?</Link>
                        <p>{this.props.loginMessage}</p>
                        <br/>
                        <br/>
                        <br/>
                        <Link to='/postlist'>View Feed</Link>
                        <br/>
                        <Link to='/adduser'>Register for account</Link>
                        <br/>
                        <Link to='/'>Landing</Link>
                    </div>
                </div>

                <div id="landingfoot">
                    <p> Porter © 2020</p>
                </div>
                
            </div>
        );
    }
}