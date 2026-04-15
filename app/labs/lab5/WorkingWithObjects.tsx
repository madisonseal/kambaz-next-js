"use client"
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
// const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const [module, setModule] = useState({
        id: 34, name: "CS2500",
        description: "Some CS Course",
        course: "Fundies ?"
      });

      const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>


      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title </a>

      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />


      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Updating Properties</h4>
    
      <FormControl type="number"  className="w-75 mb-2" defaultValue={assignment.score} 
      onChange={(e) => setAssignment({...assignment, score: parseFloat(e.target.value)})}/>
      <a className="btn btn-primary  mb-2" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
            Update Score
      </a><hr />
      <h4>Update Completeness</h4>
      <input type="checkbox"  className="w-75 " checked={assignment.completed} 
      onChange={(e) => setAssignment({...assignment, completed: e.target.checked})}/>
    <a className="btn btn-primary mb-2" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
  Update Completed
</a>
<h4>Module</h4>
<a className="btn btn-primary me-2" href={`${HTTP_SERVER}/lab5/module`}>Get Module</a>
<a className="btn btn-primary" href={`${HTTP_SERVER}/lab5/module/name`}>Get Module Name</a>
<hr />

<FormControl className="w-75 mb-2" defaultValue={module.name}
  onChange={(e) => setModule({ ...module, name: e.target.value })} />
<a className="btn btn-primary mb-2" href={`${HTTP_SERVER}/lab5/module/name/${module.name}`}>
  Update Module Name
</a>

<FormControl className="w-75 mb-2" defaultValue={module.description}
  onChange={(e) => setModule({ ...module, description: e.target.value })} />
<a className="btn btn-primary mb-2" href={`${HTTP_SERVER}/lab5/module/description/${module.description}`}>
  Update Module Description
</a>
<hr />
    </div>
);}
