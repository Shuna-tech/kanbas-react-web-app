import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as client from "./client";
import { FaEdit } from "react-icons/fa";

export default function QuizDetail() {
  const { cid, quizId } = useParams();
  const [quiz, setQuiz] = useState<any>(null);
  const currentUser = useSelector((state: any) => state.account.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId) {
        console.error("Quiz ID is undefined");
        return;
      }
      try {
        const fetchedQuiz = await client.findQuizById(quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        {currentUser.role === "FACULTY" ? (
          <>
            <button
              className="btn btn-primary"
              onClick={() =>
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Preview`)
              }
            >
              Preview
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`)
              }
            >
              Edit
            </button>
          </>
        ) : (
          <button
            className="btn btn-success"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Start`)
            }
          >
            Start the Quiz
          </button>
        )}
      </div>
      <hr />
      <h1 className="mt-4">{quiz.title}</h1>
      {currentUser.role === "FACULTY" && (
        <dl className="row">
          <dt className="col-sm-3">Quiz Type</dt>
          <dd className="col-sm-9">{quiz.type}</dd>

          <dt className="col-sm-3">Points</dt>
          <dd className="col-sm-9">{quiz.points}</dd>

          <dt className="col-sm-3">Assignment Group</dt>
          <dd className="col-sm-9">{quiz.assignmentGroup}</dd>

          <dt className="col-sm-3">Shuffle Answers</dt>
          <dd className="col-sm-9">{quiz.shuffleAnswers ? "Yes" : "No"}</dd>

          <dt className="col-sm-3">Time Limit</dt>
          <dd className="col-sm-9">{quiz.timeLimit}</dd>

          <dt className="col-sm-3">Multiple Attempts</dt>
          <dd className="col-sm-9">{quiz.multipleAttempts ? "Yes" : "No"}</dd>

          <dt className="col-sm-3">Show Correct Answers</dt>
          <dd className="col-sm-9">{quiz.showCorrectAnswers}</dd>

          <dt className="col-sm-3">One Question at a Time</dt>
          <dd className="col-sm-9">{quiz.oneQuestionAtATime ? "Yes" : "No"}</dd>

          <dt className="col-sm-3">Require Respondus LockDown Browser</dt>
          <dd className="col-sm-9">{quiz.requireRespondus ? "Yes" : "No"}</dd>

          <dt className="col-sm-3">Required to View Quiz Results</dt>
          <dd className="col-sm-9">{quiz.viewQuizResults ? "Yes" : "No"}</dd>

          <dt className="col-sm-3">Webcam Required</dt>
          <dd className="col-sm-9">{quiz.webcamRequired ? "Yes" : "No"}</dd>

          <dt className="col-sm-3">Lock Questions After Answering</dt>
          <dd className="col-sm-9">{quiz.lockQuestions ? "Yes" : "No"}</dd>

          <dt className="col-sm-3">Due Date</dt>
          <dd className="col-sm-9">{quiz.dueDate}</dd>

          <dt className="col-sm-3">Available From</dt>
          <dd className="col-sm-9">{quiz.availableDate}</dd>

          <dt className="col-sm-3">Until Date</dt>
          <dd className="col-sm-9">{quiz.untilDate}</dd>
        </dl>
      )}
    </div>
  );
}
