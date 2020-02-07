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

(function testLoadContent() {
    var note = new Note(
        "Hello this is Shaun. Nice to meet you. How are you today"
    );
    var note2 = new Note(
        "Goodbye See you next time hopefully it's tommorrow cheers"
    );
    var nc = new NoteController();
    nc.addNote(note);
    nc.addNote(note2);
    // mock
    var document2 = document.implementation.createHTMLDocument("Test");
    var element = document2.createElement("div");
    element.id = "app";
    document2.body.append(element);
    // mock
    nc.insertElement("app", document2);
    var event = new Event("hashchange");
    makeUrlChangeDisplayNoteContent();
    document2.getElementById(`${note.id}`).click();
    assert.isTrue(window.location.href === "http://localhost:8080/#notes/0");
    assert.isTrue(
        element.innerHTML ===
        "<div>Hello this is Shaun. Nice to meet you. How are you today</div>"
    );
})();

function makeUrlChangeDisplayNoteContent() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
    var snv = new SingleNoteView(
        nc.noteList.array[getNoteFromUrl(window.location)].text
    );
    showNote(snv.render());
}

function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
}

function showNote(note) {
    document.getElementById("app").innerHTML = note;
}