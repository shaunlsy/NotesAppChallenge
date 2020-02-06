(function(exports) {
    "use strict";

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.returnHTML = function() {
        var x = this.noteList.array;
        var array = [];
        for (var i = 0; i < x.length; i++) {
            var string =
                "<li><a href='#notes/" +
                i +
                "' id='" +
                i +
                "'>" +
                x[i].text.substring(0, 20) +
                "</a></li>";
            array.push(string);
        }
        return "<ul>" + array.join("") + "</ul>";
    };

    exports.NoteListView = NoteListView;
    exports.NoteListView.returnHTML = NoteListView.returnHTML;
})(this);