class SearchUI extends Library {
  constructor(container) {
    super();
    this.$container = container;
  };

  // ShowAuthorsUI.prototype = Object.create(Library.prototype);

  init() {
    this._bindEvents();
  };

  _bindEvents() {
    $('#showRandomBookBtn').on('click', $.proxy(this._handleShowSearchResults, this));
    // return false;
  };

  _handleShowSearchResults() {
    // var authors = this.getAuthors();
    // if (authors.length) {
      // this.$container.modal('show');
      this.$container.find('.modal-body').html(this._handleDisplayRandomBook());
    //   this.$container.find('.modal-body').html(this._createUlOfAuthors(authors));
    // } else {
    //   alert('No books, and therefore no authors, exist in your library yet!');
    // }
    //
    // return false;
  };

  _handleDisplayRandomBook(authors) {
    this.getRandomBook();
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
  window.gSearchUI = new SearchUI($('#myDynamicTableContent'));
  window.gSearchUI.init();
});
