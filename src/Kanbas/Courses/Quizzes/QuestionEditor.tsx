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
  const quiz = useSelector((state: any) => state.quizzes.draftQuiz);
  console.log("quiz: ", quiz)
  //use global state
  console.log("questionID: ", questionId)
  const question = quiz.questions.find((q: any) => q.questionId === Number(questionId)); //to convert into number
  console.log("question: ", question)
  const questionTitle = question?.questionTitle || '';
  console.log("title:", questionTitle)
  const questionType = question?.questionType || 'Multiple Choice';
  const questionPoints = question?.points || 0;

  //TODO: refactor the answers to global state
  const [answers, setAnswers] = useState([
    { id: 1, text: "4", isCorrect: false },
    { id: 2, text: "3", isCorrect: false },
    { id: 3, text: "5", isCorrect: true },
    { id: 4, text: "7", isCorrect: false }
  ]);
  const [correctAnswerId, setCorrectAnswerId] = useState(answers.find(answer => answer.isCorrect)?.id);

  const updateQuestion = () => {
    const updatedQuestions = quiz.questions.map((q: any) => {
      if (q.questionId === questionId) {
        return {
          ...q,
          questionTitle: questionTitle,
          questionType: questionType,
          points: questionPoints,
          question: question
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
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`, { state: { activeTab: 'questions' } });
  };

  return (
    <div className="question-form-container" style={{ padding: "20px", maxWidth: "600px", border: '1px solid #ccc', marginLeft: "200px", marginTop: "20px" }}>
      <div>
        <RichTextEditor />
        <MultipleChoiceEditor answers={answers} setAnswers={setAnswers} correctAnswerId={correctAnswerId} setCorrectAnswerId={setCorrectAnswerId} />
      </div>

      <button className="btn me-3 btn-secondary" onClick={handleCancel}>Cancel</button>
      <button className="btn btn-danger" onClick={updateQuestion}>Update Question</button>
    </div>
  );
}