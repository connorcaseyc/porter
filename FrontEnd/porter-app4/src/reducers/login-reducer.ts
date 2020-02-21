import { IUserState } from ".";
import { loginTypes } from '../action-mappers/login-actions';

const initialState:IUserState = {
    currentUser: {
        id: 0,
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        user_posts: []
    }, 
    loginMessage: ''
}

export const loginReducer = (state = initialState, action:any) => {
    //all of the different ways for the reducer to update state
    //based on the type of the action it recieves
    switch (action.type) {
        case loginTypes.SUCCESSFUL_LOGIN:{
            return {//we always return the new state, which means, spread the old state
                ...state,
                currentUser:action.payload.currentUser,
                loginMessage: 'You have Logged in'
            }
        }
        case loginTypes.UNSUCCESSFUL_LOGIN: {
            return {
                ...state,
                loginMessage:action.payload.loginMessage
            }
        } 
        default:
            return state;
    }
}