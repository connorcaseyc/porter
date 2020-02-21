import { IUser } from './IUser';

export default interface IPost {
    id: number;
    textpost: string;
    photopost: string;
    timesubmit: string;
    likenumber: number;
    user_posts: IUser;
}