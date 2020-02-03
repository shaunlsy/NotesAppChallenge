(function(exports) {

    function checkItemsCanBeStoredInArray() {
        var note = new Note("Favourite drink: seltzer");
        var noteList = new NoteList();
        noteList.storeNotes(note.text);
        if (noteList.returnNotes()[0] !== ("Favourite drink: seltzer")) {
            throw new Error("wrong")
        }
    }
    checkItemsCanBeStoredInArray();
})(this);