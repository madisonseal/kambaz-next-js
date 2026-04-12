"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const [assignment, setAssignment] = useState<any>({
    title: "New Assignment",
    description: "",
    points: 100,
    dueDate: "",
    availableDate: "",
    availableUntil: "",
  });

  useEffect(() => {
    if (aid !== "new") {
      client.findAssignmentById(aid as string).then(setAssignment);
    }
  }, [aid]);

  const handleSave = async () => {
    if (aid === "new") {
      await client.createAssignment(cid as string, assignment);
    } else {
      await client.updateAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control id="wd-name" value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={6} id="wd-description"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={10}>
            <Form.Control type="number" value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assignment Group</Form.Label>
          <Col sm={10}>
            <Form.Select>
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Display Grade as</Form.Label>
          <Col sm={10}>
            <Form.Select><option>Percentage</option></Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm={2}>Submission Type</Form.Label>
          <Col sm={10}>
            <Form.Select className="mb-2"><option>Online</option></Form.Select>
            <div className="border p-2">
              <div className="fw-bold mb-1">Online Entry Options</div>
              <Form.Check label="Text Entry" />
              <Form.Check label="Website URL" defaultChecked />
              <Form.Check label="Media Recordings" />
              <Form.Check label="Student Annotation" />
              <Form.Check label="File Uploads" />
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm={2}>Assign</Form.Label>
          <Col sm={10}>
            <div className="border p-2">
              <div className="fw-bold mb-1">Assign to</div>
              <Form.Control defaultValue="Everyone" className="mb-2" />
              <div className="fw-bold mb-1">Due</div>
              <Form.Control type="datetime-local" className="mb-2"
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
              <Row>
                <Col>
                  <div className="fw-bold mb-1">Available from</div>
                  <Form.Control type="datetime-local"
                    value={assignment.availableDate}
                    onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })} />
                </Col>
                <Col>
                  <div className="fw-bold mb-1">Until</div>
                  <Form.Control type="datetime-local"
                    value={assignment.availableUntil}
                    onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>

        <hr />
        <div>
          <Button variant="secondary" className="me-2"
            onClick={() => router.push(`/courses/${cid}/assignments`)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>Save</Button>
        </div>
      </Form>
    </div>
  );
}