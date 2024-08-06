import React, { useState } from 'react';
// @ts-ignore
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


export default function MultipleChoiceEditor(props: any) {
  const { answers, setAnswers, correctAnswerId, setCorrectAnswerId } = props;

  const handleAnswerChange = (id: any, text: any) => {
    setAnswers(answers.map((answer: any) => ({
      ...answer,
      text: answer.id === id ? text : answer.text
    })));
  };
  const selectCorrectAnswer = (id: any) => {
    setAnswers(answers.map((answer: any) => ({
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
    setAnswers(answers.filter((answer: any) => answer.id !== id));
  };

  return (
    <div>
      {answers.map((answer: any) => (
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
    </div>
  );

}
