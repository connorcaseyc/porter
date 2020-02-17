import { apiLogin } from "../remote/project2-client/project2-api"
import { useHistory } from "react-router-dom"
import {history} from "../helpers/history";


export const loginTypes = {
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_UNSUCCESSFUL_LOGIN'
}


export const updateCurrentUser = (username:string, password:string) => async (dispatch:any) => {
    let response:any = await apiLogin(username,password)
    if(response.body){
        dispatch({//this object is called an action
            type:loginTypes.SUCCESSFUL_LOGIN,
            payload:{
                currentUser:response.body,
                
            }
        
        })
    
    }else {
        dispatch({
            type:loginTypes.UNSUCCESSFUL_LOGIN,
            payload: {
                loginMessage:response.loginMessage
            }
        })

    }


}