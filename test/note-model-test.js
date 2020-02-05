(function testNewNote() {
    var note = new Note("My favourite language is JavaScript.");
    assert.isTrue(note.text === "My favourite language is JavaScript.");
})();

(function testGetNote() {
    var note = new Note("My favourite language is JavaScript.");
    assert.isTrue(note.getNote() === "My favourite language is JavaScript.");
})();

// (function(exports) {
//     function testNoteDefaultTextToMyFavouriteLanguageIsJavaScript() {
//         var note = new Note("My favourite language is JavaScript.");

//         if (note.getNotes() !== "My favourite language is JavaScript.") {
//             throw new Error("wrong default text");
//         }
//     }

//     testNoteDefaultTextToMyFavouriteLanguageIsJavaScript();
// })(this);