import { FaCalendarAlt } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

export default function AssignmentEditor() {
  const {cid} = useParams();
  return (
    <div id="wd-assignments-editor" className="ms-5">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" placeholder="New Assignment" />
      </div>
      <div className="card mb-3">
        <textarea id="wd-description" className="form-control" placeholder="New Assignment Description" />
      </div>

      <div>
        <div className="row mb-3">
          <label htmlFor="wd-points" 
            className="col-2 col-form-label" style={{textAlign: "right"}}>Points</label>
          <div className="col-10">
            <input id="wd-points" className="form-control" type="number" />
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
                    <input id="wd-due-date" className="form-control" type="date" />
                  <span className="input-group-text"><FaCalendarAlt /></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                  <div className="input-group">
                      <input id="wd-available-from" className="form-control" type="date" />
                      <span className="input-group-text"><FaCalendarAlt /></span>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                  <div className="input-group">
                    <input id="wd-available-until" className="form-control" type="date" />
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
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button className="btn btn-secondary">Cancel</button>
        </Link>
      </div>
      <div className="col-6">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button className="btn btn-danger">Save</button>
        </Link>
      </div>
    </div>
    </div> );
}   

  
   {/* return (
        <div id="wd-assignments-editor" className="ms-5">
          {assignments
          .filter((assignment: any) => assignment._id == id)
          .map((assignment) => (
            <div key={assignment._id}>
              <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value={assignment.title} />
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div dangerouslySetInnerHTML={{ __html: assignment.description }} />
                </div>
              </div>
              
              <div>
                <div className="row mb-3">
                  <label htmlFor="wd-points" 
                    className="col-2 col-form-label" style={{textAlign: "right"}}>Points</label>
                  <div className="col-10">
                    <input id="wd-points" className="form-control" value={assignment.points} />
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
                      </div> */}



  {/* //                     <div className="mb-3">
  //                       <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
  //                       <div className="input-group">
  //                         <input id="wd-due-date" className="form-control" value={assignment.due_date}/>
  //                         <span className="input-group-text"><FaCalendarAlt /></span>
  //                       </div>
  //                     </div> */}



  {/* //                     <div className="row">
  //                       <div className="col-md-6 mb-3">
  //                         <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
  //                         <div className="input-group">
  //                           <input id="wd-available-from" className="form-control" value={assignment.available_date}/>
  //                           <span className="input-group-text"><FaCalendarAlt /></span>
  //                         </div>
  //                       </div> */}



  //                       <div className="col-md-6 mb-3">
  //                         <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
  //                         <div className="input-group">
  //                           <input id="wd-available-until" className="form-control"/>
  //                           <span className="input-group-text"><FaCalendarAlt /></span>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         ))
  //         }

  //       <hr />
  //       <div className="row float-end me-1 mb-3">
  //         <div className="col-6">
  //           <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
  //             <button className="btn btn-secondary">Cancel</button>
  //           </Link>
  //         </div>
  //         <div className="col-6">
  //           <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
  //             <button className="btn btn-danger">Save</button>
  //           </Link>
  //         </div>
  //       </div>

  //     </div>
  // );}
  