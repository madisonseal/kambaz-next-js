"use client";
import { useParams } from "next/navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as db from "../../../../database"
import Link from "next/link";


export default function AssignmentEditor() {
  const {cid, aid} = useParams();

  const assignment = db.assignments.find(
    (a: any) => a._id === aid
  )
  


 

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            defaultValue={assignment?.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            id="wd-description"
            defaultValue={assignment?.description} 
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              defaultValue={assignment?.points}
            />
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
            <Form.Select>
              <option>Percentage</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm={2}>Submission Type</Form.Label>
          <Col sm={10}>
            <Form.Select className="mb-2">
              <option>Online</option>
            </Form.Select>

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
              <Form.Control
                defaultValue="Everyone"
                className="mb-2"
              />

              <div className="fw-bold mb-1">Due</div>
              <Form.Control
                type="datetime-local"
                defaultValue={assignment?.dueDate}
                className="mb-2"
              />

              <Row>
                <Col>
                  <div className="fw-bold mb-1">Available from</div>
                  <Form.Control
                    type="datetime-local"
                    defaultValue={assignment?.availableDate}
                  />
                </Col>
                <Col>
                  <div className="fw-bold mb-1">Until</div>
                  <Form.Control
                    type="datetime-local"
                    defaultValue=""
                  />
                </Col>
              </Row>

            </div>
          </Col>
        </Form.Group>

        <hr />

        <div>
          <Link href="./"> <Button variant="secondary" className="me-2">Cancel</Button> </Link>
          <Link href="./"><Button variant="danger">Save</Button></Link>
        </div>

      </Form>
    </div>
  );
}