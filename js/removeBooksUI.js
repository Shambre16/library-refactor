class RemoveBooksUI extends Library {
  constructor(container) {
    super();
    this._tempBookshelf = new Array();
    this.$container = container;
  }
  // Library.call(this);
  // this._tempBookShelf = new Array();
  // this.$container = container;
  // };

  // AddBooksUI.prototype = Object.create(Library.prototype);

  init() {
    this._bindEvents();
  };

  _bindEvents() {
    $('#removeBookBtn').on('click', $.proxy(this._handleModalOpen, this));
    $('#deleteBookBtn').on('click', $.proxy(this._handleRemoveBook, this));
  };

  _handleModalOpen() {
    this.$container.modal('show');
  };

  _handleRemoveBook() {
    alert("This is where your books get removed!");
    // this.removeBookByTitle()||this.removeBooksByAuthor();
  }
}

$(function() {
  window.gAddBooksUI = new RemoveBooksUI($('#removeBookModalData'));
  window.gAddBooksUI.init();
});
