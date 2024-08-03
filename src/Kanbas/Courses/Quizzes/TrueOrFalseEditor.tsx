import React, { useState } from 'react';
// @ts-ignore
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import RichTextEditor from "./RichTextEditor";

export default function TrueOrFalseEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [points, setPoints] = useState(3);
  const [isTrue, setIsTrue] = useState(true);

  const handleEditorChange = (state: any) => {
    setEditorState(state);
  };

  return (
    <div className="question-form-container" style={{ padding: "20px", maxWidth: "600px", border: '1px solid #ccc', marginLeft: "200px", marginTop: "20px" }}>
      <RichTextEditor />
      <div className="form-group">
        <label>Answers:</label>
        <div>
          <label>
            <input type="radio" name="answer" value="true" checked={isTrue} onChange={() => setIsTrue(true)} /> True
          </label>
          <label style={{ marginLeft: "20px" }}>
            <input type="radio" name="answer" value="false" checked={!isTrue} onChange={() => setIsTrue(false)} /> False
          </label>
        </div>
      </div><br /><br />
      <button className="btn btn-secondary" style={{ marginRight: '10px' }}>Cancel</button>
      <button className="btn btn-danger">Update Question</button>
    </div>
  );
}

