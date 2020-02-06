(function(exports) {
    "use strict";

    function Note(text) {
        this.text = text;
        this.id = null;
    }

    Note.prototype.getNote = function() {
        return this.text;
    };

    exports.Note = Note;
    exports.Note.getNote = Note.getNote;
})(this);