import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSubmit from './components/userSubmit';
import UserTable from './components/userTable';
import { Router } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { PostTable } from './components/postTable';
import PostSubmit from './components/postSubmit';
import LoginComponent from './components/Login/LoginContainer';
import ForgottenPasswordComponent from './components/forgotten-password-component/ForgottenPasswordContainer';
import ProfileComponent from './components/profile-component/ProfileContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import { history } from './history/history';

const isLoggedIn = () => sessionStorage.getItem("user");

const App: React.FC = () => {

    return (
        <div>
            <Provider store={store}>
                <Router history={history}>

                    <div>

                        <Switch>
                            <Route path="/adduser" component={UserSubmit}/>
                            <Route path="/userlist" component={UserTable}/>
                            <Route path="/postlist" render={()=> isLoggedIn() ? <PostTable/>: <LoginComponent/>}/>
                            <Route path="/addpost" component={PostSubmit}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/forgot" component={ForgottenPasswordComponent}/>
                            <Route path="/profile" component={ProfileComponent}/>
                            <Route path="/" component={Landing}/>
                        </Switch>
                    
                    </div>
                </Router>
            </Provider>
        </div>
    )
};

export default App;