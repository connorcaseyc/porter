import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { SecondComponent } from './components/second-component/SecondComponent';
import { FirstComponent } from './components/first-component/FirstComponent';
import { PropsComponent } from './components/props-component/PropsComponent';
import LandingComponent from './components/landing-component/LandingContainer'
import FeedComponent from './components/feed-component/FeedContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {/* <NavbarComponent /> */}
          <Switch>
            <Route path='/first' component={FirstComponent} />
            <Route path='/second' component={SecondComponent} />
            <Route path='/feed' component={FeedComponent} />
            <Route path='/props' render={() => <PropsComponent name={'Ccc'} color={'green'} />} />
            <Route path='/' component={LandingComponent} />
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
