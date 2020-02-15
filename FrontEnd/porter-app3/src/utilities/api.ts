import axios from 'axios';
import { axiosConfig } from './axiosConfig';
import { IUser } from '../model/shapes/IUser';

export const getUserList = () => {
    return axiosConfig.get("userlist.app");
}

export const publishUser = (body:IUser) => {
    return axiosConfig.post('add.app',body);
}
