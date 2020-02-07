<<<<<<< HEAD
import React, { SyntheticEvent } from 'react';
import { Form, Label, Col, Input, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

interface ILoginState {
    username: string
    password: string
}

interface ILoginProps {
    updateCurrentUser: (u:string, p:string) => void
    loginMessage: string 
}

export class LoginComponent extends React.Component<ILoginProps, ILoginState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    updateUsername = (event: any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    updatePassword = (event: any) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    submitLogin = async (event: SyntheticEvent) => {
        event.preventDefault()
        this.props.updateCurrentUser(this.state.username,this.state.password)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitLogin}>
                    <FormGroup row>
                        <Label for="exampleUsername" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input required
                                type="text"
                                name="Username"
                                id="exampleUsername"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input required 
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <Button>Login</Button>
                </Form>
                <p>{this.props.loginMessage}</p>
            </div>
        )
    }
=======
import React from 'react';

interface ILoginComponentProps{
    username: string;
    password: string;
>>>>>>> 46f2058b709fa6a9a40ef5b36a453b8a330d99c6
}