(function(exports) {

    function testReturnHTML() {
        var note = new Note("Hello")
        var note2 = new Note("Goodbye")
        var noteList = new NoteList()
        noteList.storeNotes(note.text)
        noteList.storeNotes(note2.text)
        var noteListView = new NoteListView(noteList)
        if (noteListView.returnHTML() !== "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>") {
            throw new Error("return wrong HTML")
        }
    }

    function testReturnHTML0Note() {
        var noteList = new NoteList()
        var noteListView = new NoteListView(noteList)
        if (noteListView.returnHTML() !== "<ul></ul>") {
            throw new Error("return wrong HTML")
        }
    }

    function testReturnHTML1Note() {
        var note = new Note("Hello")
        var noteList = new NoteList()
        noteList.storeNotes(note.text)
        var noteListView = new NoteListView(noteList)
        if (noteListView.returnHTML() !== "<ul><li><div>Hello</div></li></ul>") {
            throw new Error("return wrong HTML")
        }
    }
    testReturnHTML();
    testReturnHTML0Note();
    testReturnHTML1Note();
})(this);