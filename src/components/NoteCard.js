import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";

import EditNote from "./EditNote";

const NoteCard = ({ note, title, body, deleteNote, onEditSubmit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteNote(note.id);
  };

  const handleShowEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleEditSubmit = (id, newTitle, newBody) => {
    onEditSubmit(id, newTitle, newBody);
    setShowEdit(!showEdit)
  }

  let content = (
    <>
      <Card.Content header={title}></Card.Content>
      <Card.Content content={body}></Card.Content>
    </>
  );
  if (showEdit) {
    content = <EditNote note={note} onEditSubmit={handleEditSubmit}/>;
  }

  return (
    <Card>
      <Card.Content>
        <Icon name="trash" link onClick={handleDeleteClick} />
        <Icon name="pencil alternate" link onClick={handleShowEditClick} />
      </Card.Content>
      {content}
    </Card>
  );
};

export default NoteCard;
