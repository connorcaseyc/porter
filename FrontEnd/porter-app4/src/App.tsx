import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSubmit from './components/userSubmit';
import UserTable from './components/UserTable/userTable';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Landing } from './components/Landing';
import { PostTable } from './components/PostTable/postTable';
import PostSubmit from './components/SubmitPost/postSubmitContainer';
import LoginComponent from './components/Login/LoginContainer';
import SearchFeed from './components/Search/SearchFeedContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import { history } from './history/history';
import { CardFeed } from './components/FeedCards/CardFeed';
// import { ProfileFeed } from './components/Profile/ProfileFeedDisplay';

const App: React.FC = () => {

    return (
        <div>
            <Provider store={store}>

                <Router history={history}>
                    <div>

                        <Switch>
                            <Route path="/adduser" component={UserSubmit}/>
                            <Route path="/userlist" component={UserTable}/>
                            <Route path="/postlist" component={PostTable}/>
                            <Route path="/postfeed" component={CardFeed}/>
                            <Route path="/addpost" component={PostSubmit}/>
                            <Route path="/search" component={SearchFeed}/>
                            <Route path="/login" component={LoginComponent}/>
                            {/* <Route path="/profile" component={ProfileFeed}/> */}
                            <Route path="/" component={Landing}/>
                        </Switch>
                    
                    </div>
                </Router>
            </Provider>
        </div>
    )
};

export default App;