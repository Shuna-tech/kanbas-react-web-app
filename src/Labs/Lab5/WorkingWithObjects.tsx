import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 1, 
    name: "Module1",
    description: "Description for Module1",
    course: "Web Development"
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2 mb-2"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2 mb-2"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/><br />
      <a id="wd-update-assignment-score"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input className="form-control w-75 mb-2" id="wd-assignment-score" value={assignment.score} onChange={(e) => 
        setAssignment({...assignment, score: Number(e.target.value)})}/>
      <input type="checkbox" className="form-check-input me-2"   id="wd-assignment-completed" checked={assignment.completed}
        onChange={(e) => setAssignment({...assignment, completed: e.target.checked})}/>
      <label htmlFor="wd-assignment-completed">Completed</label>
      <a href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`} className="btn btn-primary float-end">
      Completed: {assignment.completed ? 'Yes' : 'No'}</a><br /><hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-modules" className="btn btn-primary mb-2"
          href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary mb-2"
          href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <h4>Modifying Properties</h4>
      <a id="wd-update-module-title"
          className="btn btn-primary float-end"
          href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <input className="form-control w-75" id="wd-module-name"
        value={module.name} onChange={(e) => 
          setModule({...module, name: e.target.value})} /><br />
      <a id="wd-update-module-description"
          className="btn btn-primary float-end"
          href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <input className="form-control w-75" id="wd-update-module-description"
        value={module.description} onChange={(e) => 
          setModule({...module, description: e.target.value})}/><hr />
    </div>
);}
