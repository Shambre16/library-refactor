// var AddBooksUI = function(container){
class AddBooksUI extends Library {
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
    $('#add-books-btn').on('click', $.proxy(this._handleModalOpen, this));
  };

  _handleModalOpen() {
    this.$container.modal('show');
  };
}

$(function() {
  window.gAddBooksUI = new AddBooksUI($('#addBookModalData'));
  window.gAddBooksUI.init();
});
