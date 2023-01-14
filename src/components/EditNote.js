import React, { useState } from "react";
import { Button, Card, Form } from "semantic-ui-react";

const EditNote = ({ note, onEditSubmit }) => {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSaveText = (event) => {
    event.preventDefault();
    onEditSubmit(note.id, title, body);
  };

  return (
    <>
      <Card.Content>
        <Form>
          <Form.Field
            control="input"
            value={title}
            onChange={handleTitleChange}
          ></Form.Field>
        </Form>
      </Card.Content>
      <Card.Content>
        <Form>
          <Form.Field
            control="textarea"
            rows="4"
            value={body}
            onChange={handleBodyChange}
          ></Form.Field>
        </Form>
        <Button color="teal" style={{ marginTop: "8px" }} onClick={handleSaveText}>
          Save
        </Button>
      </Card.Content>
    </>
  );
};

export default EditNote;
