(function(exports) {
    "use strict"

    function NoteList() {
        this.array = [];
    }

    NoteList.prototype.storeNotes = function(note) {
        this.array.push(note);
    }

    NoteList.prototype.returnNotes = function() {
        return this.array;
    }

    exports.NoteList = NoteList
    exports.NoteList.storeNotes = NoteList.storeNotes
    exports.NoteList.returnNotes = NoteList.returnNotes
})(this);