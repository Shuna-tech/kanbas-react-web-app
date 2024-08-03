import React, { useState } from 'react';
// @ts-ignore
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleEditorChange = (state: any) => {
    setEditorState(state);
  };
  return (
    <div>
      <div className="form-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ marginRight: '20px' }}>
          <label>Title: </label>
          <input type="text" className="form-control" placeholder="Enter title" />
        </div>
        <div style={{ marginRight: '20px' }}>
          <label>Question Type: </label>
          <select className="form-control">
            <option>Multiple Choice</option>
            <option>True/False</option>
            <option>Fill in Blanks</option>
          </select>
        </div>
        <div>
          <label>Points: </label>
          <input type="number" defaultValue={4} className="form-control" />
        </div>
      </div><br />

      <div className="form-group">
        <label>Enter your question:</label>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={handleEditorChange}
          wrapperStyle={{ padding: '5px' }}
          editorStyle={{ minHeight: '200px', padding: '10px', border: '1px solid #ccc' }}
          toolbarStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
        />
      </div><br />
    </div>
  );
}