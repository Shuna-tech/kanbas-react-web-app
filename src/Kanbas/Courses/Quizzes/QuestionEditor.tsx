import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RichTextEditor from './RichTextEditor';
import { useParams } from 'react-router-dom';
import MultipleChoiceEditor from './MultipleChoiceEditor';
import { useNavigate } from 'react-router-dom';
import { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes, setDraftQuiz, updateDraftQuiz, clearDraftQuiz } from "./reducer";

export default function QuestionEditor() {
  const { cid, qid, questionId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNew = qid === 'new';
  const quiz = useSelector((state: any) => isNew ? state.quizzes.draftQuiz : state.quizzes.quizzes.find((quiz: any) => quiz._id === qid));
  console.log("quiz: ", quiz)
  //use global state
  console.log("questionID: ", questionId)
  const question = quiz.questions.find((q: any) => q.questionId === Number(questionId)); //to convert into number
  console.log("question: ", question)
  const questionTitle = question?.questionTitle || '';
  console.log("title:", questionTitle)
  const questionType = question?.questionType || 'Multiple Choice';
  const questionPoints = question?.points || 0;
  const questionDescription = question?.question || '';
  const questionChoices = question?.choices?.length > 0 ? question.choices : [
    { id: Date.now(), text: "", isCorrect: false }
  ];

  const updateQuestion = () => {
    const updatedQuestions = quiz.questions.map((q: any) => {
      if (q.questionId === questionId) {
        return {
          ...q,
          questionTitle: questionTitle,
          questionType: questionType,
          points: questionPoints,
          question: questionDescription,
          choices: questionChoices
        };
      }
      return q;
    });
    const updateData = {
      ...quiz,
      questions: updatedQuestions
    };

    if (isNew) {
      dispatch(updateDraftQuiz(updateData));
    } else {
      dispatch(updateQuiz(updateData));
    }
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`, { state: { activeTab: 'questions' } });

  };

  useEffect(() => {
    console.log("Updated quiz questions: ", quiz.questions);
  }, [quiz.questions]);

  const handleCancel = () => {
    dispatch(clearDraftQuiz());
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`, { state: { activeTab: 'questions' } });
  };

  return (
    <div className="question-form-container" style={{ padding: "20px", maxWidth: "600px", border: '1px solid #ccc', marginLeft: "200px", marginTop: "20px" }}>
      <div>
        <RichTextEditor />
        <MultipleChoiceEditor />
      </div>

      <button className="btn me-3 btn-secondary" onClick={handleCancel}>Cancel</button>
      <button className="btn btn-danger" onClick={updateQuestion}>Update Question</button>
    </div>
  );
}