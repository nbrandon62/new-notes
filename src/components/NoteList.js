import React from "react";

import NoteCard from "./NoteCard";
import '../css/notelist.css';

const NoteList = ({ notes, deleteNote, onEditSubmit }) => {
  const renderedNotes = notes.map((note) => {
    return (
      <NoteCard
        key={note.id}
        title={note.title}
        body={note.body}
        deleteNote={deleteNote}
        note={note}
        onEditSubmit={onEditSubmit}
      />
    );
  });

  return <div className="note-list">{renderedNotes}</div >;
};

export default NoteList;
