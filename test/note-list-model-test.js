(function checkItemsCanBeStoredInArray() {
    var note = new Note("Favourite drink: seltzer");
    var noteList = new NoteList();
    noteList.storeNotes(note.text);
    assert.isTrue(noteList.returnNotes()[0] === "Favourite drink: seltzer");
})();