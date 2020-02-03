(function(exports) {
    function testNoteDefaultTextToMyFavouriteLanguageIsJavaScript() {
        var note = new Note("My favourite language is JavaScript.");

        if (note.getNotes() !== "My favourite language is JavaScript.") {
            throw new Error("wrong default text");
        }
    };

    testNoteDefaultTextToMyFavouriteLanguageIsJavaScript();
})(this);