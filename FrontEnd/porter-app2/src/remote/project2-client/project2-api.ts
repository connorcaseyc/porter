import {axiosConfig} from '../axios-config/AxiosConfig';
import ILoginState from '../../components/login-component/LoginComponent';

// export const authenticateUser = (body: ILoginState)=>{
//     return axiosConfig.post('auth.app', body);

// }


export const apiLogin = async (username: string, password: string) => {

    try {
        const response = await axiosConfig.post('auth.app', {
            username,
            password
      
        })
        if (response.status === 200) {
            const body = await response.data
            console.log(body)
            sessionStorage.setItem("user", JSON.stringify(response.data));
            return {
                body,
                loginMessage: 'successful login'
            }
        } else if (response.status === 401) {
            return {
                loginMessage: "Incorrect Username or Password",
                body: null
            }
        } else {
            return {
                loginMessage: "Something Went Wrong",
                body: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            loginMessage: "Something Went Wrong",

        }
    }
}