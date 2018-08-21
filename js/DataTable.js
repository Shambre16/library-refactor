class DataTable extends Library {
  constructor(container) {
    super();
    this.$container = container;
  }

  // DataTable.prototype = Object.create(Library.prototype);


  init() {
    // this.recover(); //Megan specific
    this._updateTable();
    this._bindEvents();
    this._bindCustomListeners();
  };

  _bindEvents() {
    //add native events here

  };

  _bindCustomListeners() {
    $(document).on('objUpdate', $.proxy(this._updateTable, this));
  };

  _updateTable(e) {
    var _self = this;
    var $tbody = this.$container.find('tbody');
    $tbody.empty();

    $.each(window.bookshelf, function(index, book) {
      $tbody.append(_self._createRow(book));
    });
  };

  _createRow(book) {
    var tr = document.createElement('tr');
    var deleteInput = document.createElement('input');
    var att = document.createAttribute("type");
    att.value = "checkbox";
    deleteInput.setAttributeNode(att);

    for (var key in book) {
      var td = document.createElement('td');
      $(td).text(book[key]);
      tr.append(td);
    }
    tr.append(document.createElement('td').append(deleteInput));
    return tr;
  };
}

$(function() {
  window.gDataTable = new DataTable($('#myDynamicTableContent'));
  window.gDataTable.init();
});
