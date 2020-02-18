import React, { SyntheticEvent } from "react";
import {
  Form,
  Label,
  Col,
  Input,
  FormGroup,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row
} from "reactstrap";
import { Link } from 'react-router-dom';

interface ISignUpState {
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
}

interface ISignUpProps {
  signUpMessage: string;
}

export class SignUpComponent extends React.Component<
  ISignUpProps,
  ISignUpState
> {
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

  render() {
    return (
      <div id="landingpage">
        <div id="swaprighthalf"></div>

        <div id="swaplefthalf">
          <div id="leftloginbar">
            <h1>Register</h1>
            <Form>
              <span>Enter Username</span>
              <Input
                required
                type="text"
                name="Username"
                id="signupuname"
                placeholder="Username*"
              />
              <br/>
              <span>Enter Password</span>
              <Input
                required
                type="password"
                name="Password"
                id="signuppword"
                placeholder="Password*"
              />
              <br/>
              <span>Enter Email</span>
              <Input
                required
                type="email"
                name="EmailAddress"
                id="signupemail"
                placeholder="Email Address*"
              />
              <br/>
              <span>Enter your Firstname</span>
              <Input
                required
                type="text"
                name="Firstname"
                id="signupfname"
                placeholder="Firstname*"
              />
              <br/>
              <span>Enter your Lastname</span>
              <Input
                required
                type="text"
                name="Lastname"
                id="signuplname"
                placeholder="Lastname*"
              />
              <br/>

              <Button id="signupbtn" color="success" size="lg" >SignUp</Button>
            </Form>
            <p>{this.props.signUpMessage}</p>
            <br />
            <br />
            <br />
           <Link to='/'>Return to Login</Link>
          </div>
        </div>

        <div id="landingfoot">
          <p> Porter © 2020</p>
        </div>
      </div>
    );
  }
}
