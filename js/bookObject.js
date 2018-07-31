// I want to make a library.  What objects do libraries hold?  Books!  I will start by making a book object using a book object constructor.
class Book {
  constructor(cover, title, author, numPages, pubDate, rating, synopsis, edit, trash) {
    // this._id = id;
    this.cover = cover;
    this.title = title;
    this.author = author;
    this.numberOfPages = numPages;
    this.publishDate = new Date(pubDate);
    this.rating = rating;
    this.synopsis = synopsis;
    this.edit = edit;
    this.trash = trash;
    // this.__v = v;
  }
};
