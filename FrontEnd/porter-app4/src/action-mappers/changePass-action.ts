import {updatePass} from '../utilities/api';

export const changeTypes = {
    SUCCESSFUL_PASS_CHANGE: 'USER_SUCCESS_PASS_CHANGE',
    UNSUCCESSFUL_PASS_CHANGE:'USER_FAILED_PASS_CHANGE'
} 

export const changeUserPassword = (email:string, password:string) => 
async (dispatch:any)=>{
    let response:any = await updatePass(email,password);
    if(response.body){
        dispatch({
            type:changeTypes.SUCCESSFUL_PASS_CHANGE
        
        });
    }else{
        dispatch({
            type:changeTypes.UNSUCCESSFUL_PASS_CHANGE
        });
    }
}