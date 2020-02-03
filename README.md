# NotesAppChallenge

Makers Week 7 Afternoon Challenge

### Application Overview

- JavaScript front end

## User stories

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

var note = new Note("Hello")
var note2 = new Note("Goodbye")
var noteList = new NoteList()
noteList.storeNotes(note.text)
noteList.storeNotes(note2.text)
var noteListView = new NoteListView(noteList)
noteListView.returnHTML()
