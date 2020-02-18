import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { getUserList } from './utilities/api';
import UserSubmit from './components/userSubmit';
import { UserTable } from './components/userTable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './components/Login';

export const App:React.FC<any> = (props:any) => {

  return (
    <div>

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/submitUser" component={UserSubmit}/> 
            <Route path="/userTable" component={UserTable}/>
            <Route path="/" component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  )
};

export default App;
