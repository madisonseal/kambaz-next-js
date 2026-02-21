"use client"
import Link from "next/link";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsJournalText, BsPlus, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import LessonControlButtons from "../modules/LessonControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text bg-white border-end-0">
            <BsSearch />
          </span>
          <input 
            type="text"
            placeholder="Search..."
            id="wd-search-assignment"
            className="form-control border-start-0"
          />
        </div>
        <div className="d-flex gap-2">
          <Button variant="secondary" id="wd-add-assignment-group">+ Group</Button>
          <Button variant="danger" id="wd-add-assignment">+ Assignment</Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroupItem className="wd-module p-0 mb-2 fs-5 border-gray gap-2">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3"/> 
              ASSIGNMENTS <span className="ms-3 border border-dark rounded px-2 py-1 bg-white small">40% of Total</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <BsPlus className="fs-4" />
              <BsThreeDotsVertical />
            </div>
          </div>

          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-3 fs-3" /> 
                  <BsJournalText className="me-3 text-success fs-4" />
                  <div>
                    <Link href={`/courses/${cid}/assignments/${assignment._id}`}>
                      <div className="fw-bold">{assignment.title}</div>
                    </Link>
                    <div className="small">
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-secondary"> | <strong>Not available until</strong> {assignment.availableDate} | <strong>Due</strong> {assignment.dueDate} | {assignment.points} points</span>
                    </div>
                  </div>
                </div>
                <LessonControlButtons/>
              </ListGroupItem>
            ))}
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}