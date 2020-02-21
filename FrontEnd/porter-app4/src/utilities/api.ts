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

// export const getUserPostList = () => {
//     return axiosConfig.get("userpostlist.app");
// }

export const publishPost = (body: IPost) => {
    return axiosConfig.post("addpost.app", body);
}

export const addLike = (body: IPost) => {
    return axiosConfig.put("updatepostlike.app", body);
}

// export const userPosts = (body: string) => {
//     return axiosConfig.get({body}+".app");
// }

// export const getUsersPosts = async (username: string) => {
//     let response = await axiosConfig.get(`${username}.app`)
//     return response.data
// }