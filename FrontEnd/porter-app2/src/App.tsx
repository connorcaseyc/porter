import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirstComponent } from './components/first-component/FirstComponent'
import { SecondComponent } from './components/second-component/SecondComponent';
import  ClickerComponent  from './components/clicker-component/ClickerContainer';
import { PropComponent } from './components/prop-component/PropComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LifecycleComponent } from './components/lifecycle-component/LifecycleComponent';
import  ChuckNorrisComponent  from './components/chuck-norris-component/ChuckNorrisContainer';
import LoginComponent  from './components/login-component/LoginContainer';
import  PokemonComponent  from './components/pokemon-component/PokemonContainer';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import  StarWarsComponent  from './components/star-wars-component/StarWarsContainer';
import  T3Component  from './components/tic-tac-toe-component/T3Container';
import SignUpComponent from './components/sign-up-component/SignUpContainer';
import  ForgottenPasswordComponent from './components/forgotten-password-component/ForgottenPasswordContainer';

//this is the root of all the components that we will make
//two rules to being a component
//1 start with a capital letter
//2 return some jsx/tsx that has one root tag
const App: React.FC = () => {
  return (
    <div className="App">
      {/* This is a component that makes it so all of its children can get access to the store */}
      <Provider store={store}>

        {/* to use react router, there is one base tag all routes must be contained in
      that tag is a component called Router */}
        <Router>

          {/* <NavbarComponent /> */}
          
          {/* With router we will always pass in three objects as props
        history, match, location */}
          {/* inside of a router we are going to have routes
        routes by default will match inclusively
        /clicker that would match '/' '/c' '/cl' '/cli' ... */}
          <Switch>
            {/* What the switch does is allow only a single route inside to be rendered at one time */}
            <Route path='/tic-tac-toe' component={T3Component}/>
            <Route path='/starwars' component={StarWarsComponent}/>
            <Route path='/pokemon' component={PokemonComponent}/>
            {/* <Route path='/login' component={LoginComponent} /> */}
            <Route path='/chucknorris' component={ChuckNorrisComponent} />
            <Route path='/lifecycle' component={LifecycleComponent} />
            <Route path='/second' component={SecondComponent} />
            <Route path='/clicker' component={ClickerComponent} />
            <Route path='/props' render={() => <PropComponent name={'Alec'} color={'grey'} />} />
            <Route path='/signup' component={SignUpComponent}/>
            {/* the syntax for a component with props, is to use the render property with an arrow function and the component with its props */}
            <Route path='/ForgottenPassword' component = {ForgottenPasswordComponent}/>
            <Route path='/' component={LoginComponent} />
           
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
