import React, { useState } from 'react';
// @ts-ignore
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FaTrashAlt } from 'react-icons/fa';
import RichTextEditor from "./RichTextEditor";

export default function FillInBlanksEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [points, setPoints] = useState(4);
  const [answers, setAnswers] = useState(['2', 'two', 'dos']);

  const handleEditorChange = (state: any) => {
    setEditorState(state);
  };

  const handlePointChange = (e: any) => {
    setPoints(e.target.value);
  };

  const handleAnswerChange = (index: any, value: any) => {
    const newAnswers = answers.slice();
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const addAnswer = () => {
    setAnswers([...answers, '']);
  };

  const removeAnswer = (index: any) => {
    const newAnswers = answers.filter((_, i) => i !== index);
    setAnswers(newAnswers);
  };

  return (
    <div className="question-form-container" style={{ padding: "20px", maxWidth: "600px", border: '1px solid #ccc', marginLeft: "200px", marginTop: "20px" }}>
      <RichTextEditor />
      <div>
        <label>Answers:</label>
        {answers.map((answer, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <input
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              className="form-control"
              style={{ marginRight: '10px' }}
            />
            <FaTrashAlt />
          </div>
        ))}
        <br />
        <button onClick={addAnswer} className="btn btn-primary float-end">+ Add Another Answer</button>
      </div><br /><br />
      <div style={{ marginTop: '20px' }}>
        <button className="btn btn-secondary" style={{ marginRight: '10px' }}>Cancel</button>
        <button className="btn btn-danger">Update Question</button>
      </div>
    </div>
  );
}
