(function(exports) {
    "use strict";

    function NoteController() {
        this.noteList = new NoteList();
        this.noteListView = new NoteListView(this.noteList);
    }

    NoteController.prototype.addNote = function(note) {
        this.noteList.storeNotes(note);
    };

    NoteController.prototype.insertElement = function(id, doc = document) {
        var element = doc.getElementById(id);
        element.innerHTML = this.noteListView.returnHTML();
    };

    exports.NoteController = NoteController;
})(this);

var nc = new NoteController();
makeUrlChangeDisplayNoteContent();

function makeUrlChangeDisplayNoteContent() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
    var snv = new SingleNoteView(
        nc.noteList.array[getNoteFromUrl(window.location)].text
    );
    showNote(snv.render());
}

function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
}

function showNote(note) {
    document.getElementById("app").innerHTML = note;
}