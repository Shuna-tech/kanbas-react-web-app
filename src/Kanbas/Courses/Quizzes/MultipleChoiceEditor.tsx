import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes, setDraftQuiz, updateDraftQuiz, clearDraftQuiz } from "./reducer";
import * as client from "./client";

export default function MultipleChoiceEditor() {
  const { qid, questionId } = useParams();
  const isNew = qid === 'new';
  const dispatch = useDispatch();

  const quiz = useSelector((state: any) => {
    return isNew ? state.quizzes.draftQuiz : state.quizzes.quizzes.find((quiz: any) => quiz._id === qid);
  });

  const questionIndex = quiz.questions.findIndex((q: any) => q.questionId === Number(questionId));

  const [answers, setAnswers] = useState(quiz.questions[questionIndex]?.choices.length > 0 ? quiz.questions[questionIndex].choices : [
    { id: Date.now(), text: "", correct: false }
  ]);
  const [correctAnswerId, setCorrectAnswerId] = useState(answers.find((answer: any) => answer.correct)?.id);

  useEffect(() => {
    if (answers.length === 0) {
      setAnswers([{ id: Date.now(), text: "", correct: false }]);
    }
  }, [answers]);

  const updateGlobalQuestion = (updatedAnswers: any) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex] = {
      ...updatedQuestions[questionIndex],
      choices: updatedAnswers
    };
    const updatedQuiz = {
      ...quiz,
      questions: updatedQuestions
    };

    if (isNew) {
      dispatch(updateDraftQuiz(updatedQuiz));
    } else {
      dispatch(updateQuiz(updatedQuiz));
    }
  };

  const handleAnswerChange = (id: any, text: any) => {
    const updatedAnswers = answers.map((answer: any) => answer.id === id ? { ...answer, text } : answer);
    setAnswers(updatedAnswers);
    updateGlobalQuestion(updatedAnswers);
  };

  const selectCorrectAnswer = (id: any) => {
    const updatedAnswers = answers.map((answer: any) => ({
      ...answer,
      correct: answer.id === id
    }));
    setAnswers(updatedAnswers);
    setCorrectAnswerId(id);
    updateGlobalQuestion(updatedAnswers);
  };

  const addAnswer = () => {
    const newAnswer = {
      id: Date.now(),
      text: "",
      correct: false
    };
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    updateGlobalQuestion(updatedAnswers);
  };

  const deleteAnswer = (id: any) => {
    const updatedAnswers = answers.filter((answer: any) => answer.id !== id);
    setAnswers(updatedAnswers);
    updateGlobalQuestion(updatedAnswers);
  };

  return (
    <div>
      {answers && answers.map((answer: any) => (
        <div key={answer.id} className="answer" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="radio"
            name="correctAnswer"
            checked={answer.correct}
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
