import React, { useState } from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";

const CreateNote = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("")

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <Segment>
      <Header size="huge">Notes</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field
          control="input"
          placeholder="Note Header.."
          value={title}
          onChange={handleTitleChange}
        ></Form.Field>
        <Form.Field
          control="textarea"
          rows="4"
          placeholder="Note Body..."
          value={body}
          onChange={handleBodyChange}
        ></Form.Field>
        <Button primary> New Note </Button>
      </Form>
    </Segment>
  );
};

export default CreateNote;
