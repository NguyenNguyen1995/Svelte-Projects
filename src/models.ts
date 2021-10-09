export class Book {
    title: string;
    author: string;
    pages: number;
    isRead: boolean;

    constructor(title = '', author = '', pages = 0, isRead = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}