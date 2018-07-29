class ShowRandomBookUI extends Library {
  constructor(container) {
    super();
    this.$container = container;
  };

  // ShowAuthorsUI.prototype = Object.create(Library.prototype);

  init() {
    this._bindEvents();
  };

  _bindEvents() {
    $('#showRandomBookBtn').on('click', $.proxy(this._handleShowRandomBook, this));
    // return false;
  };

  _handleShowRandomBook() {
    // var authors = this.getAuthors();
    // if (authors.length) {
      this.$container.modal('show');
      this.$container.find('.modal-body').html(this._handleDisplayRandomBook());
    //   this.$container.find('.modal-body').html(this._createUlOfAuthors(authors));
    // } else {
    //   alert('No books, and therefore no authors, exist in your library yet!');
    // }
    //
    // return false;
  };

  _handleDisplayRandomBook(authors) {
    var randomBook = this.getRandomBook();
    var ul = document.createElement("ul");
    for (var i = 0; i < authors.length; i++) {
      var li = document.createElement("li");
      $(li).text(authors[i]);
      ul.append(li)
    }
    return ul;
  };

}

$(function() {
  window.gRandomBookUI = new ShowRandomBookUI($('#showRandomBookModalData'));
  window.gRandomBookUI.init();
});
