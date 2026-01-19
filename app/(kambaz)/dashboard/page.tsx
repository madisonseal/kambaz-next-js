import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/photos" className="wd-dashboard-course-link">
            <Image src="/images/photography.png" width={200} height={150} alt="photography" />
            <div>
              <h5> PHOTO 1101</h5>
              <p className="wd-dashboard-course-title">
                Learn to take pictures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/courses/home-ec" className="wd-dashboard-course-link">
            <Image src="/images/cooking.jpg" width={200} height={150} alt="cooking" />
            <div>
              <h5> HC 1101</h5>
              <p className="wd-dashboard-course-title">
                Home Economics
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/dance" className="wd-dashboard-course-link">
            <Image src="/images/dancing.jpg" width={200} height={150} alt="dance" />
            <div>
              <h5> DANCE 101</h5>
              <p className="wd-dashboard-course-title">
                Learn to Dance
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/public-speaking" className="wd-dashboard-course-link">
            <Image src="/images/speaking.jpg" width={200} height={150} alt="public speaking" />
            <div>
              <h5> COM 101</h5>
              <p className="wd-dashboard-course-title">
                Public Speaking
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/improv" className="wd-dashboard-course-link">
            <Image src="/images/improv.jpg" width={200} height={150} alt="improv class" />
            <div>
              <h5> IMPV 101</h5>
              <p className="wd-dashboard-course-title">
                Improvisational Theathre
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/public-speaking" className="wd-dashboard-course-link">
            <Image src="/images/graphic.jpg" width={200} height={150} alt="graphic design" />
            <div>
              <h5>  ART 2750</h5>
              <p className="wd-dashboard-course-title">
                Graphic Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
    
      </div>
    </div>
);}
