import React, { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  setQuizzes,
  addQuiz,
  editQuiz,
  updateQuiz,
  deleteQuiz,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

export default function DetailsEditor() {
  const { cid, qid } = useParams<{ cid: string; qid?: string }>();
  const isNew = qid === "new";
  const navigate = useNavigate();
  // const { quizzes } = useSelector((state: any) => state.quizzes);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("details");
  const [totalPoints, setTotalPoints] = useState(0);

  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    quizType: "GRADED QUIZ",
    assignmentGroup: "ASSIGNMENTS",
    shuffleAnswers: true,
    timeLimit: true,
    minutes: 20,
    multipleAttempts: false,
    dueDate: "2023-12-01T00:00:00.000Z",
    availableDate: "2023-11-01T00:00:00.000Z",
    availableUntilDate: "2023-12-31T23:59:59.999Z",
    published: false,
    questions: [
      {
        _id: 0,
        questionTitle: "New Question",
        questionType: "Multiple Choice",
        points: 0,
        question: "How much is 1 + 1?",
      },
    ],
  });

  const addNewQuestion = () => {
    const newQuestion = {
      _id: quiz.questions.length,
      questionTitle: "New Question",
      question: "How much is 2 + 2?",
      questionType: "Multiple Choice",
      points: 0,
    };
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, newQuestion],
    });
  };

  const deleteQuestion = (questionId: any) => {
    console.log("question list: ", quiz.questions);
    const updatedQuestions = quiz.questions.filter(
      (question) => question._id !== questionId
    );
    setQuiz({
      ...quiz,
      questions: updatedQuestions,
    });
    console.log("quiz: ", quiz.questions);
  };

  useEffect(() => {
    const sumPoints = quiz.questions.reduce(
      (acc, question) => acc + question.points,
      0
    );
    setTotalPoints(sumPoints);
  }, [quiz.questions]);

  //TODO: Add useEffect(isNew) to distinguish existing details and questions page from new ones
  //Can refer to Assignments/Editor.tsx

  const getLinkPath = (questionType: any) => {
    const courseId = cid;
    switch (questionType) {
      case "True/False":
        return `/Kanbas/Courses/${courseId}/Quizzes/new/questions/truefalse`;
      case "Multiple Choice":
        return `/Kanbas/Courses/${courseId}/Quizzes/new/questions/multiplechoice`;
      case "Fill in Multiple Blanks":
        return `/Kanbas/Courses/${courseId}/Quizzes/new/questions/fillinblanks`;
      default:
        return "#";
    }
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // update specific question title
  const handleQuestionTitleChange = (index: any, newTitle: any) => {
    const updatedQuestions = quiz.questions.map((question, idx) =>
      idx === index ? { ...question, questionTitle: newTitle } : question
    );
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // update specific question type
  const handleQuestionTypeChange = (index: any, newType: any) => {
    const updatedQuestions = quiz.questions.map((question, idx) =>
      idx === index ? { ...question, questionType: newType } : question
    );
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleDescriptionChange = (value: any) => {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      description: value,
    }));
  };

  const handleSave = async (quiz: any) => {
    try {
      let resultData;
      if (isNew) {
        resultData = await client.createQuiz(cid as string, quiz); //TODO: print resultData
        console.log("result data: ", resultData);
        dispatch(addQuiz(quiz));
      } else {
        resultData = await client.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
      }
      navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    } catch (error) {
      console.error("Error saving quizzes:", error);
    }
  };

  const handleCancel = () => {
    console.log("handle cancel");
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  const handleSaveAndPublish = async (quiz: any) => {
    try {
      //save the quiz
      let resultData;
      if (isNew) {
        resultData = await client.createQuiz(cid as string, quiz);
        console.log("result data: ", resultData);
        dispatch(addQuiz(quiz));
      } else {
        resultData = await client.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
      }

      //publish the quiz
      const publishResult = await client.publishQuiz(
        resultData._id || quiz._id
      );
      console.log("Quiz published: ", publishResult);
      dispatch(updateQuiz({ ...quiz, published: true }));
      navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    } catch (error) {
      console.error("Error saving and publishing quizzes:", error);
    }
  };

  return (
    <div id="wd-quiz-editor" className="ms-5">
      <div className="float-end">
        <span style={{ marginRight: "8px" }}>Points</span>
        <span style={{ marginRight: "10px" }}>{totalPoints}</span>
        <span style={{ marginRight: "8px", color: "grey" }}>
          <span
            style={{ borderBottom: "1px solid grey", cursor: "not-allowed" }}
          >
            Not Published
          </span>
        </span>
        <FaEllipsisVertical />
      </div>
      <br />
      <hr />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </button>
        </li>
      </ul>
      <br />
      {activeTab === "details" && (
        <div>
          <input
            className="form-control w-50"
            placeholder="Unnamed Quiz"
            value={quiz.title}
            onChange={handleChange}
            name="title"
          />
          <br />
          <p>Quiz Instructions: </p>
          <ReactQuill
            value={quiz.description}
            onChange={handleDescriptionChange}
          />{" "}
          <br />
          <div className="row mb-3">
            <label htmlFor="wd-quiz-type" className="col-2 col-form-label">
              Quiz Type
            </label>
            <div className="col-10">
              <select
                id="wd-group"
                className="form-select"
                value={quiz.quizType}
                name="quizType"
                onChange={handleChange}
              >
                <option value="GRADED QUIZ">Graded Quiz</option>
                <option value="PRACTICE QUIZ">Practice Quiz</option>
                <option value="GRADED SURVEY">Graded Survey</option>
                <option value="UPGRADED SURVEY">Ungraded Survey</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="wd-assignment-group"
              className="col-2 col-form-label"
            >
              Assignment Group
            </label>
            <div className="col-10">
              <select
                id="wd-group"
                className="form-select"
                value={quiz.assignmentGroup}
                name="assignmentGroup"
                onChange={handleChange}
              >
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="PROJECT">Project</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="wd-quiz-options"
              className="col-2 col-form-label fw-bold"
            >
              Options
            </label>
            <br />
            <input
              type="checkbox"
              name="shuffleAnswers"
              checked={quiz.shuffleAnswers}
              onChange={handleChange}
            />{" "}
            Shuffle Answers
          </div>
          <div
            className="mt-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              type="checkbox"
              name="timeLimit"
              checked={quiz.timeLimit}
              onChange={handleChange}
            />{" "}
            Time Limit
            {quiz.timeLimit && (
              <>
                <input
                  type="number"
                  name="minutes"
                  value={quiz.minutes}
                  onChange={handleChange}
                  className="form-control ms-2"
                  style={{ width: "100px" }}
                />
                <span className="ms-2">Minutes</span>
              </>
            )}
          </div>
          <div className="mt-3">
            <input
              type="checkbox"
              name="multipleAttempts"
              checked={quiz.multipleAttempts}
              onChange={handleChange}
            />{" "}
            Allow Multiple Attempts
          </div>
          <br />
          <div className="row mb-5">
            <label className="col-form-label col-2">Assign</label>
            <div className="col-10">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <label
                      htmlFor="wd-assign-to"
                      className="form-label fw-bold"
                    >
                      Assign to
                    </label>
                    <input
                      id="wd-assign-to"
                      className="form-control"
                      value="Everyone"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="wd-due-date" className="form-label fw-bold">
                      Due
                    </label>
                    <div className="input-group">
                      <input
                        id="wd-due-date"
                        type="date"
                        className="form-control"
                        value={quiz.dueDate}
                        onChange={handleChange}
                        name="dueDate"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="wd-available-from"
                        className="form-label fw-bold"
                      >
                        Available from
                      </label>
                      <div className="input-group">
                        <input
                          id="wd-available-from"
                          type="date"
                          className="form-control"
                          value={quiz.availableDate}
                          onChange={handleChange}
                          name="availableDate"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="wd-available-until"
                        className="form-label fw-bold"
                      >
                        Until
                      </label>
                      <div className="input-group">
                        <input
                          id="wd-available-until"
                          type="date"
                          className="form-control"
                          value={quiz.availableUntilDate}
                          onChange={handleChange}
                          name="availableUntilDate"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-secondary me-2" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="btn btn-danger me-2"
              onClick={() => handleSave(quiz)}
            >
              Save
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSaveAndPublish(quiz)}
            >
              Save and Publish
            </button>
          </div>
          <br />
        </div>
      )}

      {activeTab === "questions" && (
        <div>
          <div className="float-end">
            <span style={{ marginRight: "8px" }}>Points</span>
            <span style={{ marginRight: "10px" }}>{totalPoints}</span>
          </div>
          <br />

          {quiz.questions.map((question) => (
            <div
              key={question._id}
              className="question-item"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  className="form-control me-2"
                  style={{ marginRight: "10px" }}
                  value={question.questionTitle}
                  onChange={(e) =>
                    handleQuestionTitleChange(question._id, e.target.value)
                  }
                />
                <select
                  style={{ marginRight: "10px" }}
                  value={question.questionType}
                  className="form-select"
                  onChange={(e) =>
                    handleQuestionTypeChange(question._id, e.target.value)
                  }
                >
                  <option value="True/False">True/false question</option>
                  <option value="Multiple Choice">
                    Multiple choice question
                  </option>
                  <option value="Fill in Multiple Blanks">
                    Fill in multiple blanks question
                  </option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "30px",
                }}
              >
                <Link
                  to={getLinkPath(question.questionType)}
                  key={question._id}
                >
                  <FaEdit className="fs-5 me-3" />
                </Link>
                <FaRegTrashAlt
                  className="fs-5 me-3"
                  onClick={() => deleteQuestion(question._id)}
                />
              </div>
              <br />
              <br />
            </div>
          ))}
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-primary" onClick={addNewQuestion}>
              + New Question
            </button>
          </div>
          <br />
          <div>
            <button className="btn btn-secondary me-3" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn btn-danger" onClick={() => handleSave(quiz)}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
