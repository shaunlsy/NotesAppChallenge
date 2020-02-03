(function(exports) {
    'use strict'

    function Note() {
        this.text = [];
    }

    Note.prototype.storeNotes = function(message) {
        this.text.push(message);
    }

    Note.prototype.getNotes = function() {
        return this.text;
    }

    exports.Note = Note;
})(this);