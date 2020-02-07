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

    makeUrlChangeDisplayNoteContent();

    function makeUrlChangeDisplayNoteContent() {
        window.addEventListener("hashchange", showNoteForCurrentPage);
        event.preventDefault();
    }

    function showNoteForCurrentPage() {
        showNote(this.noteList.array[getNoteFromUrl(window.location)].text);
    }

    function getNoteFromUrl(location) {
        return location.hash.split("#notes/")[1];
    }

    function showNote(note) {
        document.getElementById("app").innerHTML = note;
    }
    exports.NoteController = NoteController;
})(this);

// makeUrlChangeShowAnimalForCurrentPage();

// function makeUrlChangeShowAnimalForCurrentPage() {
//     window.addEventListener("hashchange", showAnimalForCurrentPage);
// }

// function showAnimalForCurrentPage() {
//     showAnimal(getAnimalFromUrl(window.location));
// }

// function getAnimalFromUrl(location) {
//     return location.hash.split("#")[1];
// }

// function showAnimal(animal) {
//     document.getElementById("animal").innerHTML = animal;
// }