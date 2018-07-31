// var AddBooksUI = function(container){
class AddBooksUI extends Library {
  constructor(container) {
    super();
    this._queueArray = new Array();
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
    //this = my instance
    $('#addBookBtn').on('click', $.proxy(this._handleModalOpen, this));
    this.$container.find('#addToQueueBtn').on('click', $.proxy(this._handleQueueing, this));
    this.$container.find('#addToBookshelfBtn').on('click', $.proxy(this._handleAddToBookshelf, this));
    this.$container.find('.clear-queue').on('click', $.proxy(this._handleClearQueue, this));
  };

  _handleModalOpen() {
    this.$container.modal('show');
  };

  _handleQueueing(e){
    e.preventDefault();
    var serializedForm = this.$container.find('form').serializeArray();
    // console.log(serializedForm);
    var bookObject = new Object();
    // console.log(bookObject);
    var wasBookValid = true;

    $.each(serializedForm, function(index, kvp){
    if(kvp.value) {
      bookObject[kvp.name] = kvp.value;
    } else {
      wasBookValid = false;
      alert("Please enter value for: " + kvp.name);
    }
  });
    // console.log("object create: " + bookObject);
    // console.log(bookObject);

  if(wasBookValid) {
    this.$container.find('.queue-number').text(this._queueArray.push(bookObject));
  }
  // console.log(this._queue);
  return wasBookValid;
};


  _handleAddToBookshelf() {
    if(this._queueArray.length) {
    // console.log("first check");
      if(this.addBooks(this._queueArray)) {
        // console.log("was added");
        this._handleClearQueue();
    }
  } else {
    alert("Please queue at least one book.")
  }
  this.$container.modal('hide');
  return false;
};

  _handleClearQueue() {
  this._queueArray = new Array();
  this.$container.find('.queue-number').text(this._queueArray.length);
  return false;
};


}

$(function() {
  window.gAddBooksUI = new AddBooksUI($('#addBookModalData'));
  window.gAddBooksUI.init();
});
