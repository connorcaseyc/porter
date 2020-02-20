import { axiosConfig } from './axiosConfig';
import { IUser } from '../model/IUser';
import IPost from '../model/IPost';

export const getUserList = () => {
    return axiosConfig.get("userlist.app");
}

export const publishUser = (body: IUser) => {
    return axiosConfig.post("adduser.app",body);
}

export const getPostList = () => {
    return axiosConfig.get("postlist.app")
}

export const getUserPostList = () => {
    return axiosConfig.get("userpostlist.app");
}

export const publishPost = (body: IPost) => {
    return axiosConfig.post("addpost.app", body);
}

export const apiLogin = async (username: string, password: string) => {

    try {
        const response = await axiosConfig.post('auth.app', {
            username,
            password
      
        })
        if (response.status === 200) {
            const body = await response.data;
            console.log(body);
            sessionStorage.setItem("user", body);
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