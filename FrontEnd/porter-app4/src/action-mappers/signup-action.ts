import {publishUser, addUser} from '../utilities/api';
import {history} from '../history/history';

export const signupTypes = {
    SUCCESSFUL_SIGNUP: 'REGISTER_SUCCESSFUL',
    UNSUCCESSFUL_SIGNUP: 'REGISTER_FAILED'
}

export const createNewUser = (username:string, password:string,
    email:string, firstname:string, lastname:string) => async (dispatch:any) => {
    let response:any = await addUser(username,password,email,firstname,lastname);

    if(response.body){
        dispatch({
            type:signupTypes.SUCCESSFUL_SIGNUP,
            payload:{
                currentUser:response.body
            }
        });

    }else{
        dispatch({
            type:signupTypes.UNSUCCESSFUL_SIGNUP,
            payload:{
                signupMessage:response.signupMessage
            }
        })
    }
}