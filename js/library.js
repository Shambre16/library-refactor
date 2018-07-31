// Great, I have a book.  Now what?  I can see the function in the console, but when I pass in data, it's undefined.  I need to create an instance of my library by creating a Library object with a library object constructor
class Library {
  constructor() {

  }

  _handleEventTrigger(sEvent, oData) {
      var oData = oData || {},
      event = new CustomEvent(sEvent, oData);
      document.dispatchEvent(event);
  }

  addBook(book) {
    // this.addBookAjax();
    for (let i = 0; i < window.bookshelf.length; i++) {
      let currentBook = window.bookshelf[i];
      if (currentBook.title === book.title) {
        return false;
      }
    }

    window.bookshelf.push(book);
    // this.addBookAjax();
    // this.updateLibrary();
    this._handleEventTrigger('objUpdate');
    return true;
  }

  removeBookByTitle(title) {
    for (let i = 0; i < window.bookshelf.length; i++) {
      if (window.bookshelf[i].title === title) {
        // this.deleteBookAjax(window.bookshelf[i]);
        window.bookshelf.splice(i, 1);
        // this.updateLibrary();
        return true;
      }
    }
    return false;
  }

  removeBooksByAuthor(authorName) {
    let result = false;
    for (let i = window.bookshelf.length - 1; i >= 0; i--) {
      if (window.bookshelf[i].author === authorName) {
        // this.deleteBookAjax(window.bookshelf[i]);
        window.bookshelf.splice(i, 1);
        // this.updateLibrary();
      }
    }
    return true;
  }

  getRandomBook() {
    if (window.bookshelf.length == 0) {
      return null;
    } else {
      return window.bookshelf[(Math.floor(Math.random() * window.bookshelf.length))];
    }
    return true;
  }

  getBookByTitle(title) {
    let tempArray = [];
    let pattern = new RegExp(title, "i");
    for (let i = 0; i < window.bookshelf.length; i++) {
      if (pattern.test(window.bookshelf[i].title)) {
        tempArray.push(window.bookshelf[i]);
      }
    }
    return tempArray;
  }

  getBooksByAuthor(authorName) {
    let tempArray = [];
    let pattern = new RegExp(authorName, "i");
    for (let i = 0; i < window.bookshelf.length; i++) {
      if (pattern.test(window.bookshelf[i].author)) {
        tempArray.push(window.bookshelf[i]);
      }
    }
    return tempArray;
  }

  addBooks(books) {
    // if (!books.constructor === Array) {
    //   return null;
    // }
    let count = 0;
    for (let i = 0; i < books.length; i++) {
      if (this.addBook(books[i])) {
        count++;
        // this.addBookAjax();
      }
    }
    return count;
  }

  getAuthors() {
    let tempArray = [];
    for (let i = 0; i < window.bookshelf.length; i++) {
      if (tempArray.indexOf(window.bookshelf[i].author) === -1) {
        tempArray.push(window.bookshelf[i].author);
      }
    }
    return tempArray;
  }

  getRandomAuthorName() {
    if (window.bookshelf.length == 0) {
      return [];
    } else {
      return window.bookshelf[(Math.floor(Math.random() * window.bookshelf.length))].author;
    }
  }

  search(string) {
    return this.getBookByTitle(string).concat(this.getBooksByAuthor(string));
  }
}

// I also need to instantiate the instance of the Library I've created.
$(document).ready(function() {
  // gLib.init();
});

var gLib = new Library();
