import React, { SyntheticEvent } from 'react';
import { Form, Label, Input, Button, Alert } from 'reactstrap';
import {Link} from 'react-router-dom';

interface IForgottenPasswordState
{
    email: string;
    visible: boolean;
}


export class ForgottenPasswordComponent extends React.Component<any, IForgottenPasswordState>
{

    constructor(props: any) {
        super(props);
        this.state = {
            email:'',
            visible: false
        }
    }

    updateEmail = (event:any) =>{
        this.setState({
            ...this.state,
            email: event.target.value
            
        });
    }

    submitEmail = async (event:SyntheticEvent) =>{
        event.preventDefault();
        // this.onSucceed();
        this.props.submitEmail(this.state.email);
    }
    // It Works But Page is Refreshing right now Redux will probably fix this
    onSucceed = () =>{
        this.setState({
            visible: true
        });
    }

    onDismiss = () =>{
       this.setState({
           visible: false
       });
    }
    render(){
        return(
            <div id = "forgottenPasswordPage">
                <Alert color="success" isOpen={this.state.visible}  toggle={this.onDismiss}>
                    Your email has been sucessfully sent!!!!!!!!!!!!
                </Alert>
                <div id="border">
                    <div id = "centerpiece">
                        <Label>Enter your email to recover your password</Label>
                        <Form onsubmitEmail = {this.submitEmail}>
                        <Input required type = "text" name ="email" id ="forgottenEmail" 
                            placeholder ="email@porter.com" value = {this.state.email}
                            onChange ={this.updateEmail}/>
                                                    {/* here is a change*/}
                        <Button id = "emailbtn" onChange={this.onSucceed}>Submit</Button>
                        </Form>
                        <div>
                        <Link to="/login"/>
                        </div>
                    </div>
                    
                </div>

                <div id="forgottenPasswordFoot">
                    <p> Porter © 2020</p>
                </div>

            </div>
        )
    }
}