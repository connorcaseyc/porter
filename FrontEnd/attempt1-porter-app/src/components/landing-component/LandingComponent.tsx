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

export class LandingComponent extends React.Component<ILoginProps, ILoginState> {
    constructor(props:any) {
        super(props)
        this.state = {
            username: '',
            password: '',
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
                                placeholder="put username here"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                            {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input required
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="put password here"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <Button color="danger">Login</Button>
                </Form>
                <p>{this.props.loginMessage}</p>
                <Link to='/feed'>No NavBar yet</Link>
            </div>
        )
    }









    // render() {
    //     return (
    //         <div id="landingbody">
    //             <div id="lefthalf">
    //                 <div id="lefthead">
    //                     {/* <p>Porter</p> */}
    //                 </div>
    //                 <div id="leftbody">
    //                     <p>Porter</p>
    //                 </div>
    //             </div>

    //             <div id="righthalf">
    //                 <div id="righthead">
    //                     <Form onSubmit={this.submitLogin}>
    //                         <Button id="loginbtn" outline color="secondary">Login</Button>
    //                         <Input required
    //                             type="password"
    //                             name="Password"
    //                             id="loginpassword"
    //                             placeholder="Password"
    //                             value={this.state.password}
    //                             onChange={this.updatePassword} />
    //                         <Input required 
    //                             type="text"
    //                             name="Username"
    //                             id="loginusername"
    //                             placeholder="Username"
    //                             value={this.state.username}
    //                             onChange={this.updateUsername} />
    //                     </Form>
    //                     <Link to='/feed'>Pokemon Feed?...</Link>
    //                     <Button id="forgotpwbtn" color="link">Forgot Password?</Button>
    //                 </div>
    //                 <div id="rightbody">
    //                     <br/>
    //                     <div id="porterinfo">
    //                         <p>Keep up to date with friends</p>
    //                         <p>Learn about current trends</p>
    //                         <p>Share your port</p>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div id="footbar">
    //                 <p>Porter © 2020</p>
    //             </div>

    //         </div>
    //     )
    // }

}