import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import * as client from "./client";
import { updateQuiz } from "./reducer";

export default function TakeQuiz() {
  const { cid, qid } = useParams();
  const dispatch = useDispatch(); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  //const [timeRemaining, setTimeRemaining] = useState(0);
  const currentUser = useSelector((state: any) => state.account.currentUser);
  const quiz = useSelector((state: any) =>
    state.quizzes.quizzes.find((q: any) => q._id === qid)
  );
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!quiz && qid) {
  //     const fetchQuiz = async () => {
  //       try {
  //         const fetchedQuiz = await client.findQuizById(qid);
  //         dispatch(updateQuiz(fetchedQuiz));
  //         //setTimeRemaining(fetchedQuiz.timeLimit * 60);
  //       } catch (error) {
  //         console.error("Error fetching quiz:", error);
  //       }
  //     };

  //     fetchQuiz();
  //   } else if (quiz) {
  //     setTimeRemaining(quiz.timeLimit * 60); // convert minutes to seconds
  //   }
  // }, [qid, quiz, dispatch]);

  // useEffect(() => {
  //   if (timeRemaining <= 0) {
  //     handleSubmitQuiz();
  //   }

  //   const intervalId = setInterval(() => {
  //     setTimeRemaining(timeRemaining - 1);
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [timeRemaining]);

  const handleAnswerChange = (questionId: number, answer: string, isCorrect: boolean) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = { questionId, answer, isCorrect };
      return updatedAnswers;
    });
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmitQuiz = async () => {
    let attemptNumber = 1; 
    try {
      const existingResult = await client.findQuizResultForUserAndQuiz(currentUser._id, qid as string);
      if (existingResult) {
        attemptNumber = existingResult.attemptNumber + 1;
      }
    } catch (error:any) {
      if (error.response && error.response.status === 404) {
        console.log("First attempt at the quiz, setting attemptNumber to 1");
        attemptNumber = 1;
      } else {
        console.error("Error checking existing quiz results:", error);
        return;
      }
    }
    const totalScore = answers.reduce((acc, answer) => {
      if (answer.isCorrect) {
        const question = quiz.questions.find((q:any) => q.questionId === answer.questionId);
        if (question) {
          return acc + question.points;
        }
      }
      return acc;
    }, 0);
    
    const result = {
      answers,
      totalScore,
      attemptNumber,
    };
    try {
      await client.saveQuizResult(currentUser._id, qid as string, result);
      navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/details`);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="container mt-4">
      <h1>{quiz.title}</h1> 
      <p>Time limit: {quiz.timeLimit} minutes</p>
     
     
      <div className="card p-4">
        <p>{`Question ${currentQuestionIndex + 1} of ${quiz.questions.length}`}</p>
        <h2>{currentQuestion.questionTitle}</h2> 
        <h5>{currentQuestion.question}</h5>
        {currentQuestion.questionType === "Multiple Choice" && (
          <div>
            {currentQuestion.choices.map((choice: any, index: number) => (
              <div key={index} className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={`question-${currentQuestion.questionId}`}
                  value={choice.optionText}
                  onChange={() => handleAnswerChange(currentQuestion.questionId, choice.optionText, choice.correct)}
                />
                <label className="form-check-label">{choice.optionText}</label>
              </div>
            ))}
          </div>
        )}
        {currentQuestion.questionType === "True/False" && (
          <div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name={`question-${currentQuestion.questionId}`}
                value="True"
                onChange={() => handleAnswerChange(currentQuestion.questionId, "True", currentQuestion.correct === "True")}
              />
              <label className="form-check-label">True</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name={`question-${currentQuestion.questionId}`}
                value="False"
                onChange={() => handleAnswerChange(currentQuestion.questionId, "False", currentQuestion.correct === "False")}
              />
              <label className="form-check-label">False</label>
            </div>
          </div>
        )}
        {currentQuestion.questionType === "Fill in Multiple Blanks" && (
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleAnswerChange(currentQuestion.questionId, e.target.value, e.target.value === currentQuestion.correctAnswer)}
          />
        )}
        <div className="d-flex justify-content-between mt-4">
          {currentQuestionIndex < quiz.questions.length - 1 && (
            <button className="btn btn-primary" onClick={handleNextQuestion}>
              Next
            </button>
          )}
          {currentQuestionIndex === quiz.questions.length - 1 && (
            <button className="btn btn-success" onClick={handleSubmitQuiz}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}