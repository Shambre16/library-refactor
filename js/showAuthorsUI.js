class ShowAuthorsUI extends Library {
  constructor(container) {
    super();
    this.$container = container;
  };

  // ShowAuthorsUI.prototype = Object.create(Library.prototype);

  init() {
    this._bindEvents();
    return false;
  };

  _bindEvents() {
    $('#showAllAuthorsBtn').on('click', $.proxy(this._handleShowAuthors, this));
    return false;
  };

  _handleShowAuthors() {
    var authors = this.getAuthors();
    if (authors.length) {
      this.$container.modal('show');
      this.$container.find('.modal-body').html(this._createUlOfAuthors(authors));
    } else {
      alert('No books, and therefore no authors, exist in your library yet!');
    }

    return false;
  };

  _createUlOfAuthors(authors) {
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
  window.gShowAuthUI = new ShowAuthorsUI($('#showAllAuthorsModalData'));
  window.gShowAuthUI.init();
});
