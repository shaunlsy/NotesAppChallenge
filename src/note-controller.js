(function(exports) {
    "use strict";

    function NoteController() {
        this.noteList = new NoteList();
        this.noteListView = new NoteListView(this.noteList);
    }

    exports.NoteController = NoteController;
})(this);

NoteController.prototype.addNote = function(note) {
    this.noteList.storeNotes(note);
};

NoteController.prototype.insertElement = function(id, doc = document) {
    var element = doc.getElementById(id);
    element.innerHTML = this.noteListView.returnHTML();
};