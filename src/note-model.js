(function(exports) {
    "use strict";

    function Note(text) {
        this.text = text;
    }

    Note.prototype.getNote = function() {
        return this.text;
    };

    exports.Note = Note;
    exports.Note.getNote = Note.getNote;
})(this);