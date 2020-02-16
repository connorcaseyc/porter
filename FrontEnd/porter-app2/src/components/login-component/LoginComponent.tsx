import React, { SyntheticEvent } from 'react';
import { Form, Label, Col, Input, FormGroup, Button,TabContent, TabPane, Nav,
     NavItem, NavLink, Card, CardTitle, CardText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios';
import {axiosConfig} from '../../remote/axios-config/AxiosConfig';
// import {authenticateUser} from '../../remote/project2-client/project2-api'


export default interface ILoginState {
    username: string
    password: string
    
}

interface ILoginProps {
    updateCurrentUser: (u:string, p:string) => void
    loginMessage: string
}


export class LoginComponent extends React.Component<ILoginProps, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        //by putting event binding and data binding together, we achieve something called two way data binding
        //this is where the user can update state and if state is updated the user sees the change
    }

    
    //this is an example of event binding
    //we take an event created by a user, and use it to update data in our state
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


    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault();
        this.props.updateCurrentUser(this.state.username,this.state.password);

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
                        <p><Link to='/pokemon'>View Feed</Link></p>
                        <Link to='/signup'>Register for account</Link>
                    </div>
                </div>

                <div id="landingfoot">
                    <p> Porter © 2020</p>
                </div>
                
            </div>
        );
    }
}
