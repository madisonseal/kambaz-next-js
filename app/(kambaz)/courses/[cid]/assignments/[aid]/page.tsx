export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label>Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
        
        <textarea id="wd-description" rows={10} cols={50}>
  The assignment is available online. Submit a link to the landing page of your Web application.
        </textarea>
        <br /><br />
        
        <table>
          <tbody>
            <tr>
              <td>
                <label>Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
            
            <tr>
              <td>
                <label>Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option>ASSIGNMENTS</option>
                  <option>QUIZZES</option>
                  <option>EXAMS</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td>
                <label>Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade">
                  <option>Percentage</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td>
                <label>Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option>Online</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td>
                <label>Online Entry Options</label>
              </td>
              <td>
                <input type="checkbox"/>
                <label>Text Entry</label><br />
                
                <input type="checkbox"/>
                <label>Website URL</label><br />
                
                <input type="checkbox"/>
                <label >File Uploads</label>
              </td>
            </tr>
            
            <tr>
              <td>
                <label>Assign</label>
              </td>
              <td>
                <label>Assign to</label><br />
                <input id="wd-assign-to" defaultValue="Everyone" />
              </td>
            </tr>
            
            <tr>
              <td>
                <label>Due</label><br />
                <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Available from</label><br />
                <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Until</label><br />
                <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <button>Cancel</button> <button>Save</button>
      </div>
    );
  }