(function testSingleNoteViewInstantiation() {
    var snv = new SingleNoteView("Hello");
    assert.isTrue(snv.note instanceof Note);
})();

(function testRender() {
    var snv = new SingleNoteView("Favourite drink: seltzer.");
    assert.isTrue(snv.render() === "<div>Favourite drink: seltzer.</div>");
})();