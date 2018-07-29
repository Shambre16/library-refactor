class ShowRandomAuthorUI extends Library {
  constructor(container) {
    super();
    this.$container = container;
  };

  init() {
    this._bindEvents();
  };

  _bindEvents() {
    $('#showRandomAuthorBtn').on('click', $.proxy(this._handleShowRandomAuthor, this));
    return false;
  };

  _handleShowRandomAuthor() {
    // var authors = this.getAuthors();
    // if (authors.length) {
      this.$container.modal('show');
      this.$container.find('.modal-body').html(this._displayAuthor());
    // } else {
    //   alert('No books, and therefore no authors, exist in your library yet!');
    // }
    //
    // return false;
  };

  _displayAuthor() {
    var author = this.getRandomAuthorName();
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    $(li).text(author);
    ul.append(li)
    return ul;
  };

}

$(function() {
  window.gRandomAuthUI = new ShowRandomAuthorUI($('#showRandomAuthorModalData'));
  window.gRandomAuthUI.init();
});
