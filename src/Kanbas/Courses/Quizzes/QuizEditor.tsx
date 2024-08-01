import React, { useState } from 'react';
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function QuizEditor() {
  const [activeTab, setActiveTab] = useState('details');
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    quizType: "Graded Quiz",
    assignmentGroup: "Assignments",
    shuffleAnswers: false,
    timeLimit: false,
    minutes: 0,
    multipleAttempts: false,
    dueDate: "",
    availableFrom: "",
    untilDate: ""
  });
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setQuiz(prevQuiz => ({
      ...prevQuiz,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const handleDescriptionChange = (value: any) => {
    setQuiz(prevQuiz => ({
      ...prevQuiz,
      description: value
    }));
  };

  //TODO: handleSave, handleCancel, handleSaveAndPublish 

  return (
    <div id="wd-quiz-editor" className="ms-5">
      <div className='float-end'>
        <span style={{ marginRight: '8px' }}>Points</span>
        <span style={{ marginRight: '10px' }}>0</span>
        <span style={{ marginRight: '8px', color: 'grey' }}>
          <span style={{ borderBottom: '1px solid grey', cursor: 'not-allowed' }}>
            Not Published
          </span>
        </span>
        <FaEllipsisVertical />
      </div>
      <br /><hr />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'questions' ? 'active' : ''}`}
            onClick={() => setActiveTab('questions')}
          >
            Questions
          </button>
        </li>
      </ul><br />
      {activeTab === 'details' && (
        <div>
          < input
            className='form-control w-50'
            placeholder='Unnamed Quiz'
            value={quiz.title}
            onChange={handleChange}
            name="title" /><br />
          <p>Quiz Instructions: </p>
          <ReactQuill
            value={quiz.description}
            onChange={handleDescriptionChange} /> <br />
          <div className="row mb-3">
            <label htmlFor="wd-quiz-type"
              className="col-2 col-form-label" >Quiz Type</label>
            <div className="col-10">
              <select id="wd-group" className="form-select">
                <option value="GRADED QUIZ">Graded Quiz</option>
                <option value="PRACTICE QUIZ">Practice Quiz</option>
                <option value="GRADED SURVEY">Graded Survey</option>
                <option value="UPGRADED SURVEY">Ungraded Survey</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="wd-assignment-group"
              className="col-2 col-form-label" >Assignment Group</label>
            <div className="col-10">
              <select id="wd-group" className="form-select">
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="PROJECT">Project</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="wd-quiz-options"
              className="col-2 col-form-label fw-bold">Options</label><br />
            <input
              type="checkbox"
              name="shuffleAnswers"
              checked={quiz.shuffleAnswers}
              onChange={handleChange} /> Shuffle Answers
          </div>
          <div className="mt-3" style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              name="timeLimit"
              checked={quiz.timeLimit}
              onChange={handleChange} /> Time Limit

            {quiz.timeLimit && (
              <>
                <input
                  type="number"
                  name="minutes"
                  value={quiz.minutes}
                  onChange={handleChange}
                  className="form-control ms-2"
                  style={{ width: '100px' }}
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
              onChange={handleChange} /> Allow Multiple Attempts
          </div><br />
          <div className="row mb-5">
            <label className="col-form-label col-2">Assign</label>
            <div className="col-10">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                    <input id="wd-assign-to" className="form-control" value="Everyone" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                    <div className="input-group">
                      <input id="wd-due-date" className="form-control" value={quiz.dueDate}
                        onChange={handleChange} name="dueDate" />
                      <span className="input-group-text"><FaCalendarAlt /></span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                      <div className="input-group">
                        <input id="wd-available-from" className="form-control" value={quiz.availableFrom}
                          onChange={handleChange} name="available_date" />
                        <span className="input-group-text"><FaCalendarAlt /></span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                      <div className="input-group">
                        <input id="wd-available-until" className="form-control" value={quiz.untilDate}
                          onChange={handleChange} name="until_date" />
                        <span className="input-group-text"><FaCalendarAlt /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-danger me-2">Save</button>
            <button className="btn btn-primary">Save and Publish</button>
          </div><br />
        </div>
      )}

      {activeTab === 'questions' && (
        <div>
          <div className="question-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>1</span>
              <span style={{ marginRight: '10px' }}>q1_name</span>
              <span>Multiple choice question</span>
            </div>
            <div>
              <button className="btn btn-light" style={{ marginRight: '5px' }}>
                <img src="path_to_edit_icon" alt="Edit" style={{ width: '20px' }} />
              </button>
              <button className="btn btn-light">
                <img src="path_to_delete_icon" alt="Delete" style={{ width: '20px' }} />
              </button>
            </div>
          </div>

          <div>
            <button className="btn btn-primary">+ New Question</button>
          </div><br />
          <div>
            <button className="btn btn-secondary me-3">Cancel</button>
            <button className="btn btn-danger">Save</button>
          </div>
        </div>
      )}





    </div >
  );
}