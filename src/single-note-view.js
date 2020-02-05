(function(exports) {
    "use strict";

    function SingleNoteView(text) {
        this.text = text;
        this.note = new Note(text);
    }

    exports.SingleNoteView = SingleNoteView;
})(this);

SingleNoteView.prototype.render = function(text = this.text) {
    return "<div>" + text + "</div>";
};