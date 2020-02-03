(function(exports) {
    function testNoteDefaultTextToMyFavouriteLanguageIsJavaScript() {
        var note = new Note();
        note.storeNotes("My favourite language is JavaScript.")

        if (note.text[0] !== "My favourite language is JavaScript.") {
            throw new Error("wrong default text");
        }
    };

    testNoteDefaultTextToMyFavouriteLanguageIsJavaScript();
})(this);