import React, { useState } from "react";

import CreateNote from "./CreateNote";
import NoteList from "./NoteList";
import "../css/notelist.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (title, body) => {
    const updatedNotes = [
      ...notes,
      { id: Math.round(Math.random() * 9999), title: title, body: body },
    ];
    setNotes(updatedNotes);
  };

  const deleteNoteById = (id) => {
    const updatedNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(updatedNotes);
  };

  const editBookById = (id, newTitle, newBody) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, title: newTitle, body: newBody };
      }

      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div>
      <CreateNote onCreate={createNote} />
      <NoteList
        notes={notes}
        deleteNote={deleteNoteById}
        onEditSubmit={editBookById}
      />
    </div>
  );
};

export default App;
