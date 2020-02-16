import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSubmit from './components/userSubmit';
import UserTable from './components/userTable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { PostTable } from './components/postTable';
import PostSubmit from './components/postSubmit';

const App: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <div>

                    <Switch>
                        <Route path="/adduser" component={UserSubmit}/>
                        <Route path="/userlist" component={UserTable}/>
                        <Route path="/postlist" component={PostTable}/>
                        <Route path="/addpost" component={PostSubmit}/>
                        <Route path="/" component={Landing}/>
                    </Switch>
                
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
