import Link from "next/link";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <Link href="/courses/1234/assignments/123"
               className="wd-assignment-link" >
              A1 - ENV + HTML
            </Link> 
            <ul>
                <li>Can you set up your enviroment and add html elements?</li>
            </ul>
            </li>
            <li className="wd-assignment-list-item">
            <Link href="/courses/1234/assignments/124"
               className="wd-assignment-link" >
              A2 - CSS + FLEXBOX
            </Link>
            <ul>
                <li>Can you arrange and style the HTML elements with CSS in a flexbox? </li>
            </ul>
            </li>
            <li className="wd-assignment-list-item">
            <Link href="/courses/1234/assignments/125"
               className="wd-assignment-link" >
              A3 - JS + TYPESCRIPT BASICS
            </Link> 
            <ul>
                <li>Can you learn the basics of TypeScript/JavaScript?</li>
            </ul>
            </li>
            <li className="wd-assignment-list-item">
            <Link href="/courses/1234/assignments/126"
               className="wd-assignment-link" >
              A4 - REACT COMPONENTS INTRO
            </Link>
            <ul>
                <li>Can you make and arrange React components?</li>
            </ul>
             </li>
            <li className="wd-assignment-list-item">
            <Link href="/courses/1234/assignments/127"
               className="wd-assignment-link" >
              A5 - PROJECT 1
            </Link> <ul>
                <li>Combine all your knowledge into the first project!</li>
            </ul>
             </li>
        </ul>
      </div>
  );}
  