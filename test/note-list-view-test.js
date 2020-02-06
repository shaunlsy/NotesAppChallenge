(function testReturnHTML() {
    var note = new Note("Hello12345678901234567890");
    var note2 = new Note("Goodbye12345678901234567890");
    var noteList = new NoteList();
    noteList.storeNotes(note);
    noteList.storeNotes(note2);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(
        noteListView.returnHTML() ===
        "<ul><li><a href='#notes/0' id='0'>Hello123456789012345</a></li><li><a href='#notes/1' id='1'>Goodbye1234567890123</a></li></ul>"
    );
})();

(function testReturnHTML0Note() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnHTML() === "<ul></ul>");
})();

(function testReturnHTML1Note() {
    var note = new Note("Hello");
    var noteList = new NoteList();
    noteList.storeNotes(note);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(
        noteListView.returnHTML() ===
        "<ul><li><a href='#notes/0' id='0'>Hello</a></li></ul>"
    );
})(this);