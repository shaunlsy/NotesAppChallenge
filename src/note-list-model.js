(function(exports) {
    "use strict";

    function NoteList() {
        this.array = [];
    }

    NoteList.prototype.storeNotes = function(note) {
        this.array.push(note);
        this.array[this.array.length - 1].id = this.array.length - 1;
    };

    NoteList.prototype.returnNotes = function() {
        return this.array;
    };

    exports.NoteList = NoteList;
    exports.NoteList.storeNotes = NoteList.storeNotes;
    exports.NoteList.returnNotes = NoteList.returnNotes;
})(this);