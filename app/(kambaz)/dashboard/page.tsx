"use client"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

import Link from "next/link";
import * as db from "../database";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/[cid]/reducer";



export default function Dashboard() {
   const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any;

   const { courses } = useSelector((state: RootState) => state.coursesReducer);
   const dispatch = useDispatch();
   const [showAll, setShowAll] = useState(false);
   const [enrollments, setEnrollments] = useState(db.enrollments);
   const[course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number", 
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
 });

 

 if (!currentUser) return <div className="p-4">Please sign in to view your dashboard.</div>;
 const isFaculty = currentUser.role === "FACULTY";

    const isEnrolled = (courseId: string) =>
    enrollments.some(e => e.user === currentUser._id && e.course === courseId);

const handleEnroll = (courseId: string) => {
  setEnrollments([...enrollments, { _id: uuidv4(), user: currentUser._id, course: courseId }]);
};

const handleUnenroll = (courseId: string) => {
  setEnrollments(enrollments.filter(e => !(e.user === currentUser._id && e.course === courseId)));
};

const visibleCourses = showAll ? courses : courses.filter(c => isEnrolled(c._id));


 return (
  <div id="wd-dashboard">
   <h1 id="wd-dashboard-title">Dashboard
  <Button variant="primary" className="float-end" onClick={() => setShowAll(!showAll)}>Enrollments</Button>
</h1> <hr />
   <h5>New Course ...   <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>
                  <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
</h5><br />
      <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>

   <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
   <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
    {visibleCourses.map((c) => (
     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
       <Link href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link text-decoration-none text-dark" >
        <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
        <CardBody className="card-body">
         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
          {course.name} </CardTitle>
         <CardText className="wd-dashboard-course-description overflow-hidden" style={{height:"100px"}}>
          {course.description} </CardText>
          {showAll && (
    isEnrolled(c._id)
        ? <Button variant="danger" className="ms-2" onClick={() => handleUnenroll(c._id)}>Unenroll</Button>
        : <Button variant="success" className="ms-2" onClick={() => handleEnroll(c._id)}>Enroll</Button>
            )}
         
         <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
            <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(course);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>

        </CardBody>
       </Link>
      </Card>
     </Col>
    ))}
   </Row>
  </div>
 </div>);}