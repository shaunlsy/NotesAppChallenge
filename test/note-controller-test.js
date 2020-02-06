(function testNoteControllerInstatiation() {
    var nc = new NoteController();
    assert.isTrue(nc.noteList instanceof NoteList);
})();

(function testInsertElement() {
    var nc = new NoteController();
    var note = new Note("I am Shaun");
    var note1 = new Note("I am Marcello");
    nc.addNote(note);
    nc.addNote(note1);
    // mock
    var document2 = document.implementation.createHTMLDocument("");
    var element = document2.createElement("div");
    element.id = "app";
    document2.body.append(element);
    // mock
    nc.insertElement("app", document2);
    assert.isTrue(
        element.innerHTML ===
        '<ul><li><a href="#notes/0" id="0">I am Shaun</a></li><li><a href="#notes/1" id="1">I am Marcello</a></li></ul>'
    );
})();