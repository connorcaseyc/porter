import { axiosConfig } from '../utilities/axiosConfig';
// import ILoginState from '../components/Login/LoginComponent';

export const apiLogin = async (username: string, password: string) => {

    try {
        const response = await axiosConfig.post('auth.app', {
            username,
            password
        })
        if (response.status === 200) {
            const body = await response.data
            console.log(body)
            return {
                body,
                loginMessage: 'Successful Login'
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

export const apiProfile = async (username: string) => {

    try {
        const profresponse = await axiosConfig.post('usernameposts.app', {
            username
        })
        if (profresponse.status === 200) {
            const profbody = await profresponse.data
            console.log(profbody)
            return {
                profbody,
                profileMessage: 'Successful Profile'
            }
        } else if (profresponse.status === 401) {
            return {
                profileMessage: "Incorrect Username or Password",
                profbody: null
            }
        } else {
            return {
                profileMessage: "Something Went Wrong",
                profbody: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            profileMessage: "Something Went Wrong",

        }
    }
}
