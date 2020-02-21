import React, { SyntheticEvent } from 'react';
// import { updateCurrentProfile } from '../../action-mappers/profile-action';
import { history } from '../../history/history';
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default interface ISearchState {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string
}

interface ISearchProps {
    updateCurrentProfile: (u:string) => void
    profileMessage: string
}

export class SearchFeed extends React.Component<ISearchProps, ISearchState> {
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

    updateUsername = (event:any) => {
        this.setState({
            username: event.target.value
        })
    }

    submitProfile = async (event:SyntheticEvent) => {
        event.preventDefault();
        this.props.updateCurrentProfile(this.state.username);

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitProfile}>
                    <Input
                        type="text"
                        name="searchUsername"
                        placeholder="Search Username"
                        value={this.state.username}
                        onChange={this.updateUsername} />
                    <Button>Search</Button>
                </Form>
                <Link to='/'>Landing</Link>
            </div>
        )
    }
}