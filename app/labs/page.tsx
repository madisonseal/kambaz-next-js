import Link from "next/link";


export default function Labs() {
    return (
      
      <div id="wd-labs">
        <h2>Madison Seal</h2>
        <a id="wd-github" href="https://github.com/madisonseal/kambaz-next-js" target="_blank" rel="noreferrer">
  GitHub Repository
</a>
        <h1>Labs</h1>
        <ul>
          <li>
            <Link href="/labs/lab1" id="wd-lab1-link">
              Lab 1: HTML Examples </Link>
          </li>
          <li>
            <Link href="/labs/lab2" id="wd-lab2-link">
              Lab 2: CSS Basics </Link>
          </li>
          <li>
            <Link href="/labs/lab3" id="wd-lab3-link">
              Lab 3: JavaScript Fundamentals </Link>
          </li>
          <li>
            <Link href="/labs/lab4" id="wd-lab4-link">
              Lab 4: State
            </Link>
          </li>
          <li>
            <Link href="/labs/lab5" id="wd-lab4-link">
              Lab 5: Lab 5 
            </Link>
          </li>

          <li>
            
            <Link href="/" id="wd-kambaz-link">
              Kambaz </Link>
          </li>
        </ul>
      </div>
   );}
   