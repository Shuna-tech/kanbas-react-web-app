import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes, setDraftQuiz, updateDraftQuiz, clearDraftQuiz } from "./reducer";
import * as client from "./client";

export default function MultipleChoiceEditor() {
  const { qid, questionId } = useParams();
  const dispatch = useDispatch();
  const isNew = qid === 'new';

  const quiz = useSelector((state: any) => {
    return isNew ? state.quizzes.draftQuiz : state.quizzes.quizzes.find((quiz: any) => quiz._id === qid);
  });
  const questionIndex = quiz.questions.findIndex((q: any) => q.questionId === Number(questionId));

  const [answers, setAnswers] = useState(quiz.questions[questionIndex]?.choices.length > 0 ? quiz.questions[questionIndex].choices : [
    { choiceId: Date.now(), optionText: "", correct: false }
  ]);

  useEffect(() => {
    if (quiz && quiz.questions && quiz.questions.length > questionIndex) {
      setAnswers(quiz.questions[questionIndex].choices);
    }
  }, [quiz, questionIndex]);

  const updateGlobalQuestion = (updatedAnswers: any) => {
    const updatedQuestions = quiz.questions.map((q: any, idx: any) =>
      idx === questionIndex ? { ...q, choices: updatedAnswers } : q
    );
    const updatedQuiz = { ...quiz, questions: updatedQuestions };
    isNew ? dispatch(updateDraftQuiz(updatedQuiz)) : dispatch(updateQuiz(updatedQuiz));
  };

  const handleAnswerChange = (choiceId: any, optionText: any) => {
    const updatedAnswers = answers.map((answer: any) =>
      answer.choiceId === choiceId ? { ...answer, optionText } : answer
    );
    setAnswers(updatedAnswers);
    updateGlobalQuestion(updatedAnswers);
  };

  const selectCorrectAnswer = (choiceId: any) => {
    const updatedAnswers = answers.map((answer: any) =>
      ({ ...answer, correct: answer.choiceId === choiceId })
    );
    setAnswers(updatedAnswers);
    updateGlobalQuestion(updatedAnswers);
  };

  const addAnswer = () => {
    const newAnswer = {
      choiceId: Date.now(),
      optionText: "",
      correct: false
    };
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    updateGlobalQuestion(updatedAnswers);
  };

  const deleteAnswer = (choiceId: any) => {
    const updatedAnswers = answers.filter((answer: any) => answer.choiceId !== choiceId);
    setAnswers(updatedAnswers);
    updateGlobalQuestion(updatedAnswers);
  };

  return (
    <div>
      {answers && answers.map((answer: any) => (
        <div key={answer.choiceId} className="answer" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="radio"
            name="correctAnswer"
            checked={answer.correct}
            onChange={() => selectCorrectAnswer(answer.choiceId)}
            style={{ marginRight: '20px' }}
          />
          <input
            type="text"
            value={answer.optionText}
            onChange={(e) => handleAnswerChange(answer.choiceId, e.target.value)}
            className="form-control"
            style={{ marginRight: '20px', flexGrow: 1 }}
          />
          <FaEdit style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleAnswerChange(answer.choiceId, answer.optionText)} />
          <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => deleteAnswer(answer.choiceId)} />
        </div>
      ))}
      <div onClick={addAnswer} className="text-danger float-end">+ Add Another Answer</div><br /><br />
    </div>
  );
}
