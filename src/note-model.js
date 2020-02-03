(function(exports) {
    'use strict'

    function Note(text) {
        this.text = text
    }
    
    Note.prototype.getNotes = function() {
        return this.text;
    }

    exports.Note = Note;
})(this);