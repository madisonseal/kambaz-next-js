"use client";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            defaultValue="A1 - ENV + HTML"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            id="wd-description"
            defaultValue="The assignment is available online. Submit a link to the landing page of your Web application."
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              defaultValue={100}
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
                defaultValue="2024-05-13T23:59"
                className="mb-2"
              />

              <Row>
                <Col>
                  <div className="fw-bold mb-1">Available from</div>
                  <Form.Control
                    type="datetime-local"
                    defaultValue="2024-05-06T00:00"
                  />
                </Col>
                <Col>
                  <div className="fw-bold mb-1">Until</div>
                  <Form.Control
                    type="datetime-local"
                    defaultValue="2024-05-20T23:59"
                  />
                </Col>
              </Row>

            </div>
          </Col>
        </Form.Group>

        <hr />

        <div>
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>

      </Form>
    </div>
  );
}