# NotesAppChallenge

Makers Week 7 Afternoon Challenge

### Application Overview

- JavaScript front end

### Installation

Installing Node from Terminal
Check if there's a version installed:

```
$ node -v
```

If not, install:

```
$ brew install node
```

Initialize Node with Http-Server library from the top level of the project's directory:

```
$ cd projectfolder/
$ npm install http-server --save
```

Running the server from command line:

```
$ node node_modules/http-server/bin/http-server
```

Then visit:
**localhost://8080**

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
var note3 = new Note("I am Shaun")
var noteList = new NoteList()
noteList.storeNotes(note)
noteList.storeNotes(note2)
noteList.storeNotes(note3)
var noteListView = new NoteListView(noteList)
noteListView.returnHTML()
var nc = new NoteController()
nc.addNote(note)
nc.addNote(note2)
nc.addNote(note3)
nc.insertElement("app")
