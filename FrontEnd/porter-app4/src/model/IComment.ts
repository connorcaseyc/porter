import { IUser } from "./IUser";
import IPost from "./IPost";

export default interface IComment {
    id: number,
    comment_text: string,
    comment_author: IUser,
    post_comments: IPost
}