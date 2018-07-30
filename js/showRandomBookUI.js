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
      this.$container.find('.modal-body').html(this._handleCreateRandoCard());
    //   this.$container.find('.modal-body').html(this._createUlOfAuthors(authors));
    // } else {
    //   alert('No books, and therefore no authors, exist in your library yet!');
    // }
    //
    // return false;
  };

  _handleCreateRandoCard() {
    let randomBookObject = this.getRandomBook();
      $(".card-img-top").attr("src", randomBookObject.cover);
      $(".card-title").text(randomBookObject.title);
      $(".author-paragraph").text(randomBookObject.author);
      $(".numberOfPages-paragraph").text(randomBookObject.numberOfPages);
      $(".publishDate-paragraph").text(randomBookObject.publishDate);
    // this.getRandomBookAjax(bookObject);
    //   var randomBook = this.getRandomBook();
    //   var cardDiv = document.createElement("div").addClass("card").attr("id", "randomBookModal");
    //   var img = document.createElement("img").addClass("card-img-top").attr("src", "");
    //   var cardBodyDiv = document.createElement("div").addClass("card-body");
    //   var title = document.createElement("h5").addClass("card-title");
    //   var details = document.createElement("p").addClass("card-text");
    //
    //   for (var i = 0; i < randomBook.length; i++) {
    //     $(cardDiv).text(randomBook[i]);
    //     $(img).text(randomBook[i]);
    //     $(cardBodyDiv).text(randomBook[i]);
    //     $(title).text(randomBook[i]);
    //     $(details).text(randomBook[i]);
    // }
  };

}

$(function() {
  window.gRandomBookUI = new ShowRandomBookUI($('#showRandomBookModalData'));
  window.gRandomBookUI.init();
});
