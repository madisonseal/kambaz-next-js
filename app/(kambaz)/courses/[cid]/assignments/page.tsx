import Link from "next/link";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BsGripVertical, BsJournalText, BsPlus, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import LessonControlButtons from "../modules/LessonControlButtons";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        
        <div className="d-flex justify-content-between align-items-center mb-4 ">
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
        <div className=" d-flex gap-2 ">
        <Button variant="secondary" id="wd-add-assignment-group">+ Group</Button>
        <Button variant="danger" id="wd-add-assignment">+ Assignment </Button>
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
            

<ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"> 


  <div className="d-flex align-items-center">
    <BsGripVertical className="me-3 fs-3" /> 
    <BsJournalText className="me-3 text-success fs-4" />
    <div>
      <Link href="assignments/123">
        <div className="fw-bold">A1</div>
        </Link>
      <div className="small">
        <span className="text-danger">Multiple Modules</span>
        <span className="text-secondary"> | <strong>Not available until</strong> June 10th | <strong>Due</strong> June 12th | 100 points</span>
      </div>
    </div>
  </div>
  
  <LessonControlButtons/>
  
</ListGroupItem>

<ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"> 
  <div className="d-flex align-items-center">
    <BsGripVertical className="me-3 fs-3" /> 
    <BsJournalText className="me-3 text-success fs-4" />
    <div>
    <Link href="assignments/123">
      <div className="fw-bold">A2</div>
      </Link>
      <div className="small">
        <span className="text-danger">Multiple Modules</span>
        <span className="text-secondary"> | <strong>Not available until</strong> July 10th | <strong>Due</strong> July 12th | 100 points</span>
      </div>
    </div>
  </div>
  <LessonControlButtons/>
</ListGroupItem>

<ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"> 
  <div className="d-flex align-items-center">
    <BsGripVertical className="me-3 fs-3" /> 
    <BsJournalText className="me-3 text-success fs-4" />
    <div>
    <Link href="assignments/123">
      <div className="fw-bold">A3</div>
      </Link>
      <div className="small">
        <span className="text-danger">Multiple Modules</span>
        <span className="text-secondary"> | <strong>Not available until</strong> August 10th | <strong>Due</strong> August 12th | 100 points</span>
      </div>
    </div>
  </div>
  <LessonControlButtons/>
</ListGroupItem>

<ListGroupItem className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"> 
  <div className="d-flex align-items-center">
    <BsGripVertical className="me-3 fs-3" /> 
    <BsJournalText className="me-3 text-success fs-4" />
    <div>
    <Link href="assignments/123">
      <div className="fw-bold">P1</div>
      </Link>
      <div className="small">
        <span className="text-danger">Multiple Modules</span>
        <span className="text-secondary"> | <strong>Not available until</strong> September 10th | <strong>Due</strong> September 12th | 100 points</span>
      </div>
    </div>
  </div>
  <LessonControlButtons/>
</ListGroupItem>





          </ListGroupItem>
          </ListGroup>



       
       
        


        
      </div>
  )};
  