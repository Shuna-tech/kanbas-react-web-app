import { FaCalendarAlt } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, id } = useParams<{ cid: string; id?: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {assignments} = useSelector((state: any) => state.assignments);
  const isNew = id === 'new';
  const descriptionRef = useRef<HTMLDivElement>(null);

  const [assignmentDetails, setAssignmentDetails] = useState({
    _id: "",
    title: "",
    description: "",
    points: "",
    due_date: "",
    available_date: "",
    until_date: "",
  });

  useEffect(() => {
    if (!isNew && assignments) {
      const existingAssignment = assignments.find((a: any) => a._id === id);
      if (existingAssignment) {
        setAssignmentDetails({
          _id: existingAssignment._id,
          title: existingAssignment.title,
          description: existingAssignment.description,
          points: existingAssignment.points,
          due_date: existingAssignment.due_date,
          available_date: existingAssignment.available_date,
          until_date: existingAssignment.until_date,
        });
      }
    }
  }, [id, assignments, isNew]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAssignmentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async() => {
    const updatedDetails = {
      ...assignmentDetails,
      description: descriptionRef.current?.innerHTML || ""
    };
    try {
      let resultData;
      if (isNew) {
        resultData = await client.createAssignment(cid as string, updatedDetails);
        dispatch(addAssignment(resultData));  
      } else {
        resultData = await client.updateAssignment(updatedDetails);
        
        dispatch(updateAssignment(resultData));  
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

    return (
        <div id="wd-assignments-editor" className="ms-5">
              <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value={assignmentDetails.title} 
                  onChange={handleChange} name="title" placeholder="New Assignment"/>
              </div>
              <div className="card mb-3">
                <div
                  ref={descriptionRef}
                  contentEditable="true"
                  className="form-control"
                  style={{ minHeight: '150px', overflowY: 'auto' }}
                  dangerouslySetInnerHTML={{ __html: assignmentDetails.description }} >
                </div>
              </div>
              <div>
                <div className="row mb-3">
                  <label htmlFor="wd-points" 
                    className="col-2 col-form-label" style={{textAlign: "right"}}>Points</label>
                  <div className="col-10">
                    <input id="wd-points" className="form-control" value={assignmentDetails.points} 
                      onChange={handleChange} name="points" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="wd-group"
                    className="col-2 col-form-label" style={{textAlign: "right"}}>Assignment Group</label>
                  <div className="col-10">
                    <select id="wd-group" className="form-select">
                      <option value="ASSIGNMENTS">Assignments</option>
                      <option value="PROJECTS">Projects</option>
                      <option value="QUIZES">Quizes</option>
                      <option value="EXAMS">Exams</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="wd-display-grade-as" 
                    className="col-2 col-form-label" style={{textAlign: "right"}}>Display Grade as</label>
                  <div className="col-10">
                    <select id="wd-display-grade-as" className="form-select">
                      <option value="PERCENTAGE">Percentage</option>
                      <option value="NUMBER">Number</option>
                    </select>
                  </div> 
                </div>

                <div className="row mb-3">
                  <label htmlFor="wd-submission-type"
                    className="col-form-label col-2" style={{textAlign: "right"}}>Submission Type</label>
                  <div className="col-10">
                    <div className="card">
                      <div className="card-body">
                        <select id="wd-submission-type" className="form-select mb-3">
                          <option value="ONLINE">Online</option>
                          <option value="OFFLINE">Offline</option>
                        </select>
                        <label className="card-text fw-bold mb-3">Online Entry Options</label>
                        <div className="form-check mb-3">
                          <input type="checkbox" className="form-check-input"
                            name="options" id="wd-website-url"/>
                          <label htmlFor="wd-website-url" className="form-check-label">Text Entry</label><br/>
                        </div>
                        <div className="form-check mb-3">
                          <input type="checkbox" className="form-check-input"
                            name="options" id="wd-website-url"/>
                          <label htmlFor="wd-website-url" className="form-check-label">Website URL</label><br/>
                        </div>
                        <div className="form-check mb-3">
                          <input type="checkbox" className="form-check-input"
                            name="options" id="wd-website-url"/>
                          <label htmlFor="wd-website-url" className="form-check-label">Media Recordings</label><br/>
                        </div>
                        <div className="form-check mb-3">
                          <input type="checkbox" className="form-check-input"
                            name="options" id="wd-website-url"/>
                          <label htmlFor="wd-website-url" className="form-check-label">Student Annotation</label><br/>
                        </div>
                        <div className="form-check mb-3">
                          <input type="checkbox" className="form-check-input"
                            name="options" id="wd-website-url"/>
                          <label htmlFor="wd-website-url" className="form-check-label">File Uploads</label><br/>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="row mb-5">
                <label className="col-form-label col-2" style={{textAlign: "right"}}>Assign</label>
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
                          <input id="wd-due-date" className="form-control" value={assignmentDetails.due_date} 
                            onChange={handleChange} name="due_date"/>
                          <span className="input-group-text"><FaCalendarAlt /></span>                       
                         </div>
                    </div>
                   <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                        <div className="input-group">
                         <input id="wd-available-from" className="form-control" value={assignmentDetails.available_date} 
                          onChange={handleChange} name="available_date" />
                         <span className="input-group-text"><FaCalendarAlt /></span>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                        <div className="input-group">
                          <input id="wd-available-until" className="form-control" value={assignmentDetails.until_date} 
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
       <div className="row float-end me-1 mb-3">
         <div className="col-6">
            <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
         </div>
           <div className="col-6">
              <button className="btn btn-danger" onClick={handleSave}>Save</button>
           </div>
         </div>
      </div>
   );}
  