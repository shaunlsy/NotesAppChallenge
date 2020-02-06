(function checkItemsCanBeStoredInArray() {
    var note = new Note("Favourite drink: seltzer");
    var noteList = new NoteList();
    noteList.storeNotes(note);
    assert.isTrue(noteList.returnNotes()[0].text === "Favourite drink: seltzer");
})();

(function testNoteIDs() {
    var note = new Note("Hello.");
    var note1 = new Note("Goodbye.");
    var noteList = new NoteList();
    noteList.storeNotes(note);
    noteList.storeNotes(note1);
    assert.isTrue(note.id === 0);
    assert.isTrue(note1.id === 1);
})();