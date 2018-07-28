// I want to make a library.  What objects do libraries hold?  Books!  I will start by making a book object using a book object constructor.
class Book {
  constructor(id, title, author, numPages, pubDate, cover, edit, trash, v) {
    this._id = id;
    this.title = title;
    this.author = author;
    this.numberOfPages = numPages;
    this.publishDate = new Date(pubDate);
    this.cover = cover;
    this.edit = edit;
    this.trash = trash;
    this.__v = v;
  }
};
