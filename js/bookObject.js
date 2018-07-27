// I want to make a library.  What objects do libraries hold?  Books!  I will start by making a book object using a book object constructor.
var Book = function(title, author, numPages, pubDate, cover, trash) {
  this.title = title,
  this.author = author,
  this.numberOfPages = numPages,
  this.publishDate = new Date(pubDate),
  this.cover = cover,
  this.trash = trash
}
