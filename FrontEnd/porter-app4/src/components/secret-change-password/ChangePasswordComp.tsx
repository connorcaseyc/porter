import React, { SyntheticEvent } from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {updatePass} from '../../utilities/api';

interface changeState{
    email:string
    password:string
    updateMessage:string
}

interface changePassProps{
    changeUserPassword: (e:string, p:string) => void

}

export class ChangePassword extends React.Component<any, changeState>{
    constructor(props:any){
        super(props);
        this.state={
            email:'',
            password:'',
            updateMessage:''
        }
    }

    updateEmail=(event:any) => {
        this.setState({
            ...this.state,
            email:event.target.value
        });
    }

    updatePassword = (event:any) => {
        this.setState({
            ...this.state,
            password:event.target.value
        });
    }

    submitChange = async (event: SyntheticEvent) =>{
        event.preventDefault();
        // this.props.changeUserPassword(this.state.email, this.state.password);
        let changeMessage = await updatePass(this.state.email,this.state.password);
            this.setState({
                ...this.state,
                updateMessage: changeMessage
            })
    }

    render(){

        return(
            <>
            <div>
                <Form onSubmit={this.submitChange}>
                    <span>Email</span>
                    <Input required
                    type="email"
                    name="Email"
                    placeholder="@Example.com"
                    value={this.state.email}
                    onChange={this.updateEmail}/>
                    <span>update password</span>
                    <Input required
                    type="password"
                    name="Password"
                    placeholder="new password"
                    value={this.state.password}
                    onChange={this.updatePassword}/>
                    <Button>update password</Button>
                </Form>
            </div>
            <div>
                <p>{this.state.updateMessage}</p>
            </div>
            </>
        )
    }


}
