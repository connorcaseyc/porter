import React, { SyntheticEvent } from "react";
import {
  Form,Input,Button} from "reactstrap";
import { Link } from 'react-router-dom';

interface ISignUpState {
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
}

interface ISignUpProps {
    createNewUser: (u:string, p:string, e:string, fn:string, ln:string)  => void
    signupMessage: string
}

export class SignUpComponent extends React.Component<
  ISignUpProps,ISignUpState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: ""
    };
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
    updateEmail = (event: any) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }
    updateFirstname = (event: any) => {
        this.setState({
            ...this.state,
            firstname: event.target.value
        })
    }
    updateLastname = (event: any) => {
        this.setState({
            ...this.state,
            lastname: event.target.value
        })
    }
    submitSignUp = async (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(this.state.username, this.state.password, this.state.email,
                 this.state.firstname, this.state.lastname);
                
        this.props.createNewUser(this.state.username, this.state.password, this.state.email,
            this.state.firstname, this.state.lastname);
    }
  render() {
    return (
      <div id="landingpage">
        <div id="swaprighthalf"></div>

        <div id="swaplefthalf">
          <div id="leftloginbar">
            <h1>Register</h1>
            <Form onSubmit={this.submitSignUp}>
              <span>Enter Username</span>
              <Input
                required
                type="text"
                name="Username"
                id="signupuname"
                placeholder="Username*"
                value={this.state.username}
                onChange={this.updateUsername}
              />
              <br/>
              <span>Enter Password</span>
              <Input
                required
                type="password"
                name="Password"
                id="signuppword"
                placeholder="Password*"
                onChange={this.updatePassword}
              />
              <br/>
              <span>Enter Email</span>
              <Input
                required
                type="email"
                name="EmailAddress"
                id="signupemail"
                placeholder="Email Address*"
                value={this.state.email}
                onChange={this.updateEmail}
              />
              <br/>
              <span>Enter your Firstname</span>
              <Input
                required
                type="text"
                name="Firstname"
                id="signupfname"
                placeholder="Firstname*"
                value={this.state.firstname}
                onChange={this.updateFirstname}
              />
              <br/>
              <span>Enter your Lastname</span>
              <Input
                required
                type="text"
                name="Lastname"
                id="signuplname"
                placeholder="Lastname*"
                value={this.state.lastname}
                onChange={this.updateLastname}
              />
              <br/>

              <Button id="signupbtn" color="success" size="lg" >SignUp</Button>
            </Form>
            <p>{this.props.signupMessage}</p>
            <br />
            <br />
            <br />
           <Link to='/login'>Return to Login</Link>
          </div>
        </div>

        <div id="landingfoot">
          <p> Porter © 2020</p>
        </div>
      </div>
    );
  }
}