import QuizzesControls from "./QuizzesControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaEdit, FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { setQuizzes, deleteQuiz, updateQuiz } from "./reducer";
import * as client from "./client";
// TODO: Add quiz list and quiz details screen
// Can refer to Assignments/index.tsx
//
export default function Quizzes() {
  const quizzes = useSelector((state: any) => state.quizzes.quizzes);
  const currentUser = useSelector((state: any) => state.account.currentUser); // Get current user
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState(null);

  const handleDelete = async (quizId: any) => {
    await client.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));

    setShowModal(false);
    setCurrentQuizId(null);
    fetchQuizzes();
  };

  const handlePublish = async (quizId: any, action: string) => {
    await client.publishQuiz(quizId);
    const updatedQuiz = quizzes.find((quiz: any) => quiz._id === quizId);
    updatedQuiz.published = action === "publish";
    dispatch(updateQuiz(updatedQuiz));
  };

  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };

  const renderAvailability = (quiz: any) => {
    const currentDate = new Date();
    const availableDate = new Date(quiz.availableDate);
    const availableUntilDate = new Date(quiz.availableUntilDate);

    if (currentDate < availableDate) {
      return `Not available until ${quiz.availableDate}`;
    } else if (
      currentDate >= availableDate &&
      currentDate <= availableUntilDate
    ) {
      return "Available";
    } else {
      return "Closed";
    }
  };
  useEffect(() => {
    fetchQuizzes();
  }, [cid, dispatch]);

  return (
    <div id="wd-quizzes" className="ms-5">
      <QuizzesControls />
      <br />
      <br />
      {quizzes
        .filter((quiz: any) => quiz.course === cid)
        .map((quiz: any) => (
          <ul
            id="wd-quiz-list"
            className="list-group rounded-0 border-left-green border-gray"
            key={quiz._id}
          >
            <li className="wd-quiz-list-item list-group-item p-0 fs-5 d-flex align-items-center text-nowrap">
              <div className="ps-2">
                <BsGripVertical className="me-2 fs-3" />
                <FaEdit
                  className="me-2 fs-3 text-success"
                  onClick={() => {
                    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`);
                  }}
                />
              </div>
              <div className="p-3 flex-grow-1">
                <div>
                  <Link
                    to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                    className="text-dark fw-bold text-decoration-none"
                  >
                    {quiz._id}
                  </Link>
                </div>
                <div>
                  <span className="text-danger">{quiz.title}</span>
                  <span className="mx-2">|</span>
                  <span className="text-muted fw-bold">
                    {renderAvailability(quiz)}
                  </span>
                  <span className="mx-2">|</span>
                  <span className="text-muted fw-bold">Due </span>
                  <span className="text-muted">{quiz.dueDate}</span>
                  <span className="mx-2">|</span>
                  <span className="text-muted">{quiz.points} pts</span>
                  <span className="mx-2">|</span>
                  <span className="text-muted">{quiz.questions} questions</span>
                  {currentUser.role === "STUDENT" && quiz.score && (
                    <>
                      <span className="mx-2">|</span>
                      <span className="text-muted">Score: {quiz.score}</span>
                    </>
                  )}
                </div>
              </div>
              {currentUser.role === "FACULTY" && (
                <div className="float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical
                    className="ms-2 me-3 fs-3"
                    onClick={() =>
                      document
                        .getElementById(`quiz-context-menu-${quiz._id}`)
                        ?.classList.toggle("d-none")
                    }
                  />
                  <div
                    id={`quiz-context-menu-${quiz._id}`}
                    className="quiz-context-menu d-none"
                  >
                    <div
                      onClick={() => {
                        navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`);
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="btn btn-danger"
                      onClick={() => handleDelete(quiz._id)}
                    >
                      Delete
                    </div>
                    <div
                      onClick={() =>
                        handlePublish(
                          quiz._id,
                          quiz.published ? "unPublish" : "publish"
                        )
                      }
                    >
                      {quiz.published ? "Unpublish" : "Publish"}
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        ))}
    </div>
  );
}
