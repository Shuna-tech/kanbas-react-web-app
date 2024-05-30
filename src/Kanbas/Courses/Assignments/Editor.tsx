export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="ms-5">
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" value="A1" />
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <p className="card-text">
              The assignment is <span className="text-danger">available online</span>
            </p>
            <p className="card-text">
            Submit a link to the landing page of your Web application running on Netlify.
            </p>
            <p className="card-text">
              The landing page should include the following:
            </p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p className="card-text">
              The Kanbas application should include a link to navigate back to the landing page.
            </p>
          </div>
        </div>

        <div>
          <div className="row mb-3">
            <label htmlFor="wd-points" 
              className="col-2 col-form-label" style={{textAlign: "right"}}>Points</label>
            <div className="col-10">
              <input id="wd-points" className="form-control" value={100} />
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
                    <input type="datetime-local" id="wd-due-date" className="form-control" value={"2024-05-13T23:59"}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                    <div className="input-group">
                      <input type="datetime-local" id="wd-available-from" className="form-control" value={"2024-05-06T12:00"}/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                    <div className="input-group">
                      <input type="datetime-local" id="wd-available-until" className="form-control"/>
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
            <button className="btn btn-secondary">Cancel</button>
          </div>
          <div className="col-6">
            <button className="btn btn-danger">Save</button>
          </div>
        </div>
      </div>
  );}
  