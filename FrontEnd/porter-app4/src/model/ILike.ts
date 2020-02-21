import IPost from "./IPost";
import { IUser } from "./IUser";

export default interface ILike {
    id: number,
    like_author: IUser,
    post_likes: IPost
}