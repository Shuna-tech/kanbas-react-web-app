export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of
        </textarea>
        <br />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="PROJECTS">Projects</option>
                <option value="QUIZES">Quizes</option>
                <option value="EXAMS">Exams</option>
              </select>
            </td> 
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="NUMBER">Number</option>
              </select>
            </td> 
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
              </select>
            </td> 
          </tr><br />
        </table>
          <label>Online Entry Options</label>
            <br/>
            <input type="checkbox"
                name="options" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
            <input type="checkbox"
                name="options" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>
            <input type="checkbox"
                name="options" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            <input type="checkbox"
                name="options" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
            <input type="checkbox"
                name="options" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/><br/>
            <label htmlFor="wd-assign-to">Assign to</label><br/>
            <input id="wd-assign-to" value="Everyone" /><br/><br/>
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date" id="wd-due-date" value="2024-05-13"/><br /><br/>
            <table>
                <tr>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label><br/>
                        <input type="date" id="wd-available-from" value="2024-05-06"/>
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br/>
                        <input type="date" id="wd-available-until" value="2024-05-20"/>
                    </td>
                </tr>
            </table>
        <hr />
        <table>
          <tr>
            <td><button>Cancel</button></td>
            <td><button>Save</button></td>
          </tr>
        </table>
      </div>
  );}
  