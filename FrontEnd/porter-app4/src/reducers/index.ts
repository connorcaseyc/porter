import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import { IUser } from '../model/IUser';

export interface IUserState {
    currentUser: IUser,
    loginMessage: string
}

export interface IState {
    userState:IUserState 
}

export const state = combineReducers<IState>({
    userState:loginReducer
})