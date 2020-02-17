import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSubmit from './components/userSubmit';
import UserTable from './components/userTable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { PostTable } from './components/postTable';
import PostSubmit from './components/postSubmit';
import LoginComponent from './components/Login/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import { history } from './history/history';

const App: React.FC = () => {

    return (
        <div>
            <Provider store={store}>

                <BrowserRouter>
                    <div>

                        <Switch>
                            <Route path="/adduser" component={UserSubmit}/>
                            <Route path="/userlist" component={UserTable}/>
                            <Route path="/postlist" component={PostTable}/>
                            <Route path="/addpost" component={PostSubmit}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/" component={Landing}/>
                        </Switch>
                    
                    </div>
                </BrowserRouter>
            </Provider>
        </div>
    )
};

export default App;