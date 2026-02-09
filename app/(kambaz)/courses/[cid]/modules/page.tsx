import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./modulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";


export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls /> <br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">

        
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
      <BsGripVertical className="me-2 fs-3"/> Week 1
    </div>
    <ModuleControlButtons/>
  </div>
          <ListGroup className="wd-lessons rounded-0">
            
            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
            LEARNING OBJECTIVES:  <LessonControlButtons/>
            </ListGroupItem>  

            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Course Introduction
             <LessonControlButtons/>
            </ListGroupItem> 
            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
            How the Web works  <LessonControlButtons/>
            </ListGroupItem> 

            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Setting up your enviroment  <LessonControlButtons/>
            </ListGroupItem> 
          </ListGroup>
        </ListGroupItem>
   
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
      <BsGripVertical className="me-2 fs-3"/> Week 2
    </div>
    <ModuleControlButtons/>
  </div>
          <ListGroup className="wd-lessons rounded-0">
            
            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
            LEARNING OBJECTIVES:  <LessonControlButtons/>
            </ListGroupItem>  

            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
              Understanding HTML structure
             <LessonControlButtons/>
            </ListGroupItem> 
            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Common HTML Elements and Markup  <LessonControlButtons/>
            </ListGroupItem> 

            <ListGroupItem className="wd-lesson p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Forms, Tables, and Lists <LessonControlButtons/>
            </ListGroupItem> 
          </ListGroup>
        </ListGroupItem>

      
    

      </ListGroup>
    </div>
  );
}