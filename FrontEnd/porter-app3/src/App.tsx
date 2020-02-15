import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const App:React.FC<any> = (props:any) => {

  return (
    <div>

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/submitUser" component={UserSubmit}/> 
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App;
