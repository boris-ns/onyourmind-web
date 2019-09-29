export class Post {

    id: number;
    text: string;
    dateTime: string;
    likes: number;
    dislikes: number;
    enabled: boolean;
    authorId: number;
    authorName: string;
    comments: Array<any>;
}