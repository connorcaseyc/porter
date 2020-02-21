import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import { profileReducer } from './profile-reducer';
import { IUser } from '../model/IUser';

export interface IUserState {
    currentUser: IUser,
    loginMessage: string
}

export interface IProfileState {
    currentProfile: IUser,
    profileMessage: string
}

export interface IState {
    userState:IUserState,
    profileState:IProfileState
}

export const state = combineReducers<IState>({
    userState:loginReducer,
    profileState:profileReducer
})