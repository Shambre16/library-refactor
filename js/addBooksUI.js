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
    $('#addBookBtn').on('click', $.proxy(this._handleModalOpen, this));
    $('#addToQueueBtn').on('click', $.proxy(this._handleQueueing, this));
    $('#addToBookshelfBtn').on('click', $.proxy(this._handleAddToBookshelf, this));
  };

  _handleModalOpen() {
    this.$container.modal('show');
  };

  _handleQueueing(){
alert("Queue it up!");
  }

  _handleAddToBookshelf() {
alert("Yo shit's been added!");

  }
}

$(function() {
  window.gAddBooksUI = new AddBooksUI($('#addBookModalData'));
  window.gAddBooksUI.init();
});
