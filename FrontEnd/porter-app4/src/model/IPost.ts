import { IUser } from './IUser';

export default interface IPost {
    id: number;
    textpost: string;
    photopost: string;
    user_posts: IUser|null
}