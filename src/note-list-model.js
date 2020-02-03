(function(exports) {



function NoteList(note = new Note()){
  this.note = note;
  this.array = [];
}

NoteList.prototype.storeNotes = function(note) {
  this.array.push(note);
}

NoteList.prototype.returnNotes = function() {
  return this.array;
}
exports.NoteList = NoteList
})(this);