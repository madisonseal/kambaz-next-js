"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({params} : {params: {cid: string}}) {
  const {cid} = params;
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const pathname = usePathname();


  return (
  <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    {links.map((link) => {
      const linkAddress = `/courses/${cid}/${link.toLowerCase()}`;
      const isActive = pathname.includes(link.toLowerCase());

      return (
        <Link 
        key={link}
        href={linkAddress}
        id={`wd-course-${link.toLowerCase()}-link`}
        className={`list-group-item border-0 ${isActive ? "active" : "text-danger"}`}>
        {link}
        </Link>
      )
    })}
    </div>
);
}

