import React, { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes, setDraftQuiz, updateDraftQuiz, clearDraftQuiz } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

//TODO: to refactor the code with global state instead of local state
interface LocationState {
  activeTab: string;
}

export default function DetailsEditor() {
  const { cid, qid } = useParams<{ cid: string; qid?: string }>();
  const isNew = qid === "new";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const state = location.state as LocationState;

  const [activeTab, setActiveTab] = useState("details");
  const [totalPoints, setTotalPoints] = useState(0);

  // Check for state passed in navigation and adjust the active tab accordingly
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location]);

  const quiz = useSelector((state: any) => state.quizzes.draftQuiz);

  let counter = quiz.questions.length;
  const addNewQuestion = () => {
    console.log("Adding new question");
    const newQuestion = {
      questionId: Date.now() + counter++,
      questionTitle: 'New Question',
      question: "How much is 2 + 2?",
      questionType: "Multiple Choice",
      points: 0,
    };
    const updatedQuestions = [...quiz.questions, newQuestion];
    if (isNew) { //当页面为new时，没有quizId,按照reducer逻辑需要quizId,无法更新页面
      // For a new quiz, update the draft quiz state
      console.log("Updating draft quiz with new question for a new quiz");
      dispatch(updateDraftQuiz({
        ...quiz,
        questions: updatedQuestions
      }));
    } else {
      // For an existing quiz, update the quiz with an ID
      console.log("Updating existing quiz with new question");
      if (quiz._id) {
        dispatch(updateQuiz({
          ...quiz,
          questions: updatedQuestions
        }));
      } else {
        console.error("quiz ID is missing, unable to update the existing quiz");
      }
    }
  };

  const deleteQuestion = (questionId: any) => {
    const updatedQuestions = quiz.questions.filter((question: any) => question.questionId !== questionId);
    const updatedquiz = {
      ...quiz,
      questions: updatedQuestions
    };
    if (isNew) {
      dispatch(updateDraftQuiz(updatedquiz));
    } else {
      dispatch(updateQuiz(updatedquiz));
    }
  }

  useEffect(() => {
    console.log("Updated quiz questions: ", quiz.questions);
  }, [quiz.questions]);


  const handleEditQuestion = (questionId: any) => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/new/questions/${questionId}`);
  };


  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const updatedquiz = { ...quiz, [name]: type === 'checkbox' ? checked : value }
    if (isNew) {
      dispatch(updateDraftQuiz(updatedquiz))
    } else {
      dispatch(updateQuiz(updatedquiz));
    }
  }

  const handleDescriptionChange = (value: any) => {
    const updatedquiz = { ...quiz, description: value };
    if (isNew) {
      dispatch(updateDraftQuiz(updatedquiz))
    } else {
      dispatch(updateQuiz(updatedquiz));
    }
  };

  const handleQuestionChange = (e: any, questionId: any) => {
    const { name, value } = e.target;
    const updatedQuestions = quiz.questions.map((question: any) =>
      question.questionId === questionId ? { ...question, [name]: value } : question
    );
    const updatedquiz = { ...quiz, questions: updatedQuestions };
    if (isNew) {
      dispatch(updateDraftQuiz(updatedquiz))
    } else {
      dispatch(updateQuiz(updatedquiz));
    }
  };

  const handleSave = async (quiz: any) => {
    try {
      let resultData;
      if (isNew) {
        resultData = await client.createQuiz(cid as string, quiz); //TODO: print resultData
        console.log("Created quiz Data:", resultData);
        dispatch(addQuiz(resultData));
      } else {
        resultData = await client.updateQuiz(quiz);
        dispatch(updateQuiz(resultData));
      }
      dispatch(clearDraftQuiz()); //save quiz之后要把draftquiz的状态清空
      navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    } catch (error) {
      console.error("Error saving quizzes:", error);
    }
  };

  const handleCancel = () => {
    dispatch(clearDraftQuiz());
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  const handleSaveAndPublish = async (quiz: any) => {
    try {
      //save the quiz
      let resultData;
      if (isNew) {
        resultData = await client.createQuiz(cid as string, quiz);
        console.log("result data: ", resultData)
        dispatch(addQuiz(resultData));
      } else {
        resultData = await client.updateQuiz(quiz);
        dispatch(updateQuiz(resultData));
      }
      //publish the quiz
      const publishResult = await client.publishQuiz(resultData._id);
      console.log("quiz published: ", publishResult);
      dispatch(updateQuiz({ ...quiz, published: true }));

      dispatch(clearDraftQuiz());
      navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    } catch (error) {
      console.error("Error saving and publishing quizzes:", error);
    };
  }

  useEffect(() => {
    if (quiz && quiz.questions) {
      const sum = quiz.questions.reduce((acc: any, curr: any) => acc + (curr.points || 0), 0);
      setTotalPoints(sum);
    }
  }, [quiz]);

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
          < input
            className='form-control w-50'
            placeholder='Unnamed quiz'
            value={quiz.title}
            onChange={handleChange}
            name="title" /><br />
          <p>quiz Instructions: </p>
          <ReactQuill
            value={quiz.description}
            onChange={handleDescriptionChange}
          />{" "}
          <br />
          <div className="row mb-3">
            <label htmlFor="wd-quiz-type"
              className="col-2 col-form-label" >quiz Type</label>
            <div className="col-10">
              <select id="wd-group" className="form-select" value={quiz.quizType} name="quizType" onChange={handleChange}>
                <option value="GRADED quiz">Graded quiz</option>
                <option value="PRACTICE quiz">Practice quiz</option>
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




      {activeTab === 'questions' && (
        <div>
          <div className="float-end">
            <span style={{ marginRight: "8px" }}>Points</span>
            <span style={{ marginRight: "10px" }}>{totalPoints}</span>
          </div>
          <br />

          {quiz.questions.map((question: any) => (
            <div key={question.questionId} className="question-item" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }} >
                <span className='me-2 form-control'
                  style={{ marginRight: '15px' }}>{question.questionId}</span>
                <input className='form-control me-2'
                  name="questionTitle"
                  style={{ marginRight: '10px' }}
                  value={question.questionTitle}
                  onChange={(e) => handleQuestionChange(e, question.questionId)} />
                <input
                  name="questionType"
                  style={{ marginRight: '10px' }}
                  value={question.questionType}
                  className='form-control'
                  onChange={(e) => handleQuestionChange(e, question.questionId)} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px' }}>
                <FaEdit className='fs-5 me-3' onClick={() => handleEditQuestion(question.questionId)} />
                <FaRegTrashAlt className='fs-5 me-3' onClick={() => deleteQuestion(question.questionId)} />
              </div><br /><br />
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
