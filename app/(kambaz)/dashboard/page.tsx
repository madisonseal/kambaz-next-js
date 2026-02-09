import Link from "next/link";
import Image from "next/image";
import "./styles.css"
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/reactjs.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/photography.png" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">PHOTO 1101</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Learn how to take beautiful pictures.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card> </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
   <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/cooking.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">HC 1101</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Learn how to make tasty dishes.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
     </Card> </Col>
     <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
   <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/speaking.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">COMM 1101</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Speak confidently and clearly!</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
     </Card> </Col>

     <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
   <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/dancing.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">DNCE 2500</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Learn how express your dancing in an contemporary style.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
     </Card> </Col>
     <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
   <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/improv.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">IMPRV 1101</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Learn improv! Be silly with it! </CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
     </Card> </Col>
     <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   <Card>
   <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/graphic.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">ART 2750</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Learn art principals and graphic design.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
     </Card> </Col>
  </Row>

 
</div></div>
);}
