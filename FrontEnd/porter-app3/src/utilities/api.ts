import axios from 'axios';
import { axiosConfig } from './axiosConfig';
import { IUser } from '../model/IUser';

export const getUserList = () => {
    return axiosConfig.get("userlist.app");
}

export const publishUser = (body: IUser) => {
    return axiosConfig.post('adduser.app',body);
}
