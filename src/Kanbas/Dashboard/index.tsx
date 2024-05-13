export default function Dashboard(){
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses(12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/1234/Home">CS1234 React JS 
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home">Go</a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-link" 
                        href="#/Kanbas/Courses/5010/Home">CS5010 Programming Design
                        </a>
                        <p className="wd-dashboard-course-programming-design">
                            Programming Design Paradigm
                        </p>
                        <a href="#Kanbas/Courses/5010/Home">Go</a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-link" 
                        href="#/Kanbas/Courses/5610/Home">CS5610 Web Development
                        </a>
                        <p className="wd-dashboard-course-web-development">
                        Web Development
                        </p>
                        <a href="#Kanbas/Courses/5610/Home">Go</a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-link" 
                        href="#/Kanbas/Courses/5800/Home">CS5800 Algorithm
                        </a>
                        <p className="wd-dashboard-course-algorithm">
                            Algorithm
                        </p>
                        <a href="#Kanbas/Courses/5800/Home">Go</a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-link" 
                        href="#/Kanbas/Courses/5400/Home">CS5400 Programming Language
                        </a>
                        <p className="wd-dashboard-course-programming-language">
                            Principles of Programming Language
                        </p>
                        <a href="#Kanbas/Courses/5400/Home">Go</a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-link" 
                        href="#/Kanbas/Courses/5600/Home">CS5600 Computer Systems
                        </a>
                        <p className="wd-dashboard-course-computer-systems">
                            Computer Systems
                        </p>
                        <a href="#Kanbas/Courses/5600/Home">Go</a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-link" 
                        href="#/Kanbas/Courses/6410/Home">CS6410 Compilers
                        </a>
                        <p className="wd-dashboard-course-compilers">
                            Compilers
                        </p>
                        <a href="#Kanbas/Courses/6410/Home">Go</a>
                    </div>
                </div>
            </div>
        </div>
    );
}