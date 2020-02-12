import React, { SyntheticEvent } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';


interface IForgottenPasswordState
{
    email: string;
}

export class ForgottenPasswordComponent extends React.Component<any, IForgottenPasswordState>
{
    constructor(props: any) {
        super(props);
        this.state = {
            email:''
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
        this.props.submitEmail(this.state.email);
    }

    render(){
        return(
            <div id = "forgottenPasswordPage">
                
                <div id="border">
                    <div id = "centerpiece">
                        <Label>Enter your email to recover your password</Label>
                        <Form onsubmitEmail = {this.submitEmail}>
                        <Input required type = "text" name ="email" id ="forgottenEmail" 
                            placeholder ="email@porter.com" value = {this.state.email}
                            onChange ={this.updateEmail}/>
                        <Button id = "emailbtn">Submit</Button>
                        </Form>
                    </div>
                </div>

                <div id="forgottenPasswordFoot">
                    <p> Porter © 2020</p>
                </div>

            </div>
        )
    }
}