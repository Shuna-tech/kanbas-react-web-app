import React, { useState } from 'react';
// @ts-ignore
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import RichTextEditor from "./RichTextEditor";

export default function MultipleChoiceEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [answers, setAnswers] = useState([
    { id: 1, text: "4", isCorrect: false },
    { id: 2, text: "3", isCorrect: false },
    { id: 3, text: "5", isCorrect: true },
    { id: 4, text: "7", isCorrect: false }
  ]);
  const [correctAnswerId, setCorrectAnswerId] = useState(answers.find(answer => answer.isCorrect)?.id);

  const handleEditorChange = (state: any) => {
    setEditorState(state);
  };

  const handleAnswerChange = (id: any, text: any) => {
    setAnswers(answers.map(answer => ({
      ...answer,
      text: answer.id === id ? text : answer.text
    })));
  };
  const selectCorrectAnswer = (id: any) => {
    setAnswers(answers.map(answer => ({
      ...answer,
      isCorrect: answer.id === id
    })));
    setCorrectAnswerId(id);
  };

  const addAnswer = () => {
    const newAnswer = {
      id: answers.length + 1,
      text: "",
      isCorrect: false
    };
    setAnswers([...answers, newAnswer]);
  };

  const deleteAnswer = (id: any) => {
    setAnswers(answers.filter(answer => answer.id !== id));
  };

  return (
    <div className="question-form-container" style={{ padding: "20px", maxWidth: "600px", border: '1px solid #ccc', marginLeft: "200px", marginTop: "20px" }}>
      <RichTextEditor />
      {answers.map(answer => (
        <div key={answer.id} className="answer" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="radio"
            name="correctAnswer"
            checked={correctAnswerId === answer.id}
            onChange={() => selectCorrectAnswer(answer.id)}
            style={{ marginRight: '20px' }}
          />
          <input
            type="text"
            value={answer.text}
            onChange={(e) => handleAnswerChange(answer.id, e.target.value)}
            className="form-control"
            style={{ marginRight: '20px', flexGrow: 1 }}
          />
          <FaEdit style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleAnswerChange(answer.id, answer.text)} />
          <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => deleteAnswer(answer.id)} />
        </div>
      ))}
      <div onClick={addAnswer} className="text-danger float-end">+ Add Another Answer</div><br /><br />
      <button className="btn me-3 btn-secondary">Cancel</button>
      <button className="btn btn-danger">Update Question</button>
    </div>
  );

}
