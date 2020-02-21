import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';

// Interfaces below describe the data we want from the components
export interface IUserState {
    currentUser:any
    loginMessage:string
    signupMessage:string
}


// This interface contains subinterfaces that represent different parts of state
export interface IState {
    userState:IUserState 
}

export const state = combineReducers<IState>({
    userState:loginReducer
})