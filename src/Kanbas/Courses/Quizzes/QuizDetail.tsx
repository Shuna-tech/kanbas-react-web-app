import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as client from "./client";
import { FaEdit } from "react-icons/fa";

export default function QuizDetail() {
  const { cid, qid } = useParams();
  const [quiz, setQuiz] = useState<any>(null);
  const currentUser = useSelector((state: any) => state.account.currentUser);
  const navigate = useNavigate();

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!qid) {
        console.error("Quiz ID is undefined");
        return;
      }
      try {
        const fetchedQuiz = await client.findQuizById(qid);
        console.log("Fetched quiz:", fetchedQuiz);
        setQuiz(fetchedQuiz);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [qid, cid]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center align-items-center">
        {currentUser.role === "FACULTY" ? (
          <>
            <button
              className="btn btn-primary mx-2"
              onClick={() =>
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`)
              }
            >
              Preview
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`)
              }
            >
              Edit
            </button>
          </>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Start`)
            }
          >
            Start the Quiz
          </button>
        )}
      </div>
      <hr />
      <h1 className="mt-4">{quiz.title}</h1>
      <br />
      {currentUser.role === "FACULTY" && (
        <dl className="row">
          <dt className="col-sm-3" style={{ textAlign: "right" }}>
            Quiz Type
          </dt>
          <dd className="col-sm-9">{quiz.quizType}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Points
          </dt>
          <dd className="col-sm-9">{quiz.points}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Assignment Group
          </dt>
          <dd className="col-sm-9">{quiz.assignmentGroup}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Shuffle Answers
          </dt>
          <dd className="col-sm-9">{quiz.shuffleAnswers ? "Yes" : "No"}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Time Limit
          </dt>
          <dd className="col-sm-9">{quiz.timeLimit}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Multiple Attempts
          </dt>
          <dd className="col-sm-9">{quiz.multipleAttempts ? "Yes" : "No"}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            How Many Attempts
          </dt>
          <dd className="col-sm-9">{quiz.howManyAttempts}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Show Correct Answers
          </dt>
          <dd className="col-sm-9">{quiz.showCorrectAnswers}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Access Code
          </dt>
          <dd className="col-sm-9">{quiz.accessCode}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            One Question at a Time
          </dt>
          <dd className="col-sm-9">{quiz.oneQuestionAtATime ? "Yes" : "No"}</dd>

          {/* <dt className="col-sm-3">Require Respondus LockDown Browser</dt>
            <dd className="col-sm-9">{quiz.requireRespondus ? "Yes" : "No"}</dd>

            <dt className="col-sm-3">Required to View Quiz Results</dt>
            <dd className="col-sm-9">{quiz.viewQuizResults ? "Yes" : "No"}</dd> */}

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Webcam Required
          </dt>
          <dd className="col-sm-9">{quiz.webcamRequired ? "Yes" : "No"}</dd>

          <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
            Lock Questions After Answering
          </dt>
          <dd className="col-sm-9">{quiz.lockQuestions ? "Yes" : "No"}</dd>
        </dl>
      )}
      <dl className="row">
        <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
          Due Date
        </dt>
        <dd className="col-sm-9">{formatDate(quiz.dueDate)}</dd>
        <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
          Available From
        </dt>
        <dd className="col-sm-9">{formatDate(quiz.availableDate)}</dd>
        <dt className="col-sm-3 text-right" style={{ textAlign: "right" }}>
          Until Date
        </dt>
        <dd className="col-sm-9">{formatDate(quiz.availableUntilDate)}</dd>
      </dl>
    </div>
  );
}
