import {IUserState} from '.';
import {signupTypes} from '../action-mappers/signup-action';

const initialState:IUserState = {
    currentUser:null,
    loginMessage:'',
    signupMessage:''
}

export const signupReducer = (state = initialState, action:any) => {

    switch(action.type){
        case signupTypes.SUCCESSFUL_SIGNUP:{
            return{
                ...state,
                currentUser:action.payload.currentUser,
                signupMessage: "You have been Registered"
            }
        }
        case signupTypes.UNSUCCESSFUL_SIGNUP: {
            return {
                ...state,
                signupMessage:action.payload.signupMessage
            }
        }

        default:
            return state;
    }
}