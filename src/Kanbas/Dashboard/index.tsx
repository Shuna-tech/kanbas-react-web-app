export default function Dashboard(){
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses(12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px"}}>
                        <div className="card" style={{height: "300px"}}>
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold",
                                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                                    }}>
                                        CS1234 React JS 
                                </a>
                                <p className="wd-dashboard-course-title card-text" 
                                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "260px", marginBottom: "35px"}}>
                        <div className="card" style={{height: "300px"}}>
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" 
                                    href="#/Kanbas/Courses/5010/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        CS5010 Programming Design
                                </a>
                                <p className="wd-dashboard-course-programming-design"
                                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                    Programming Design Paradigm
                                </p>
                                <a href="#Kanbas/Courses/5010/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "260px", marginBottom: "35px"}}>
                        <div className="card" style={{height: "300px"}}>
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" 
                                    href="#/Kanbas/Courses/5610/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        CS5610 Web Development
                                </a>
                                <p className="wd-dashboard-course-web-development"
                                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                    Web Development
                                </p>
                                <a href="#Kanbas/Courses/5610/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>

                    </div>
                    <div className="wd-dashboard-course col" style={{width: "260px", marginBottom: "35px"}}>
                        <div className="card" style={{height: "300px"}}>
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" 
                                    href="#/Kanbas/Courses/5800/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        CS5800 Algorithm
                                </a>
                                <p className="wd-dashboard-course-algorithm"
                                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                    Algorithm
                                </p>
                                <a href="#Kanbas/Courses/5800/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "260px", marginBottom: "35px"}}>
                        <div className="card" style={{height: "300px"}}>
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" 
                                    href="#/Kanbas/Courses/5400/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        CS5400 Programming Language
                                </a>
                                <p className="wd-dashboard-course-programming-language"
                                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                    Principles of Programming Language
                                </p>
                                <a href="#Kanbas/Courses/5400/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "260px", marginBottom: "35px"}}>
                        <div className="card" style={{height: "300px"}}>
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" 
                                    href="#/Kanbas/Courses/5600/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        CS5600 Computer Systems
                                </a>
                                <p className="wd-dashboard-course-computer-systems"
                                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                    Computer Systems
                                </p>
                                <a href="#Kanbas/Courses/5600/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course" style={{width: "260px", marginBottom: "35px"}}>
                        <div className="card" style={{height: "300px"}}>
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" 
                                href="#/Kanbas/Courses/6410/Home"
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                    CS6410 Compilers
                                </a>
                                <p className="wd-dashboard-course-compilers"
                                    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                                    Compilers
                                </p>
                                <a href="#Kanbas/Courses/6410/Home" className="btn btn-primary">Go</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}