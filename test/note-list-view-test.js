(function testReturnHTML() {
    var note = new Note("Hello");
    var note2 = new Note("Goodbye");
    var noteList = new NoteList();
    noteList.storeNotes(note.text);
    noteList.storeNotes(note2.text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(
        noteListView.returnHTML() ===
        "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>"
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
    noteList.storeNotes(note.text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(
        noteListView.returnHTML() === "<ul><li><div>Hello</div></li></ul>"
    );
})(this);