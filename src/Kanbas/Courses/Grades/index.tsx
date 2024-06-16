import GradesControl from "./GradesControl";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { LiaFileExportSolid } from "react-icons/lia";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Grades(){
    const {cid} = useParams()
    const enrollments = db.enrollments
    const assignments = db.assignments
    const grades = db.grades;

    return(
        <div id="wd-grades" className="ms-3 container">
            <GradesControl/><br /><br /><br />
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label className="col-form-label fw-bold">Student Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input type="text" className="form-control" placeholder="Search Students" />
                        <span className="input-group-text"><FaChevronDown /></span>
                    </div>
                </div>
                <div className="col-sm-6 mb-3">
                    <label className="col-form-label fw-bold">Assignment Names</label>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input type="text" className="form-control" placeholder="Search Assignments" />
                        <span className="input-group-text"><FaChevronDown /></span>
                    </div>
                </div>
            </div>
            <button className="btn btn-lg btn-secondary mb-3">
                <CiFilter className="fs-5 me-1"/>
                Apply Filters
            </button>

            <div id="wd-css-responsive-tables">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr className="text-center">
                                 <th>Student Name</th>
                                {assignments
                                    .filter((assignment: any) => assignment.course == cid)
                                    .map((assignment) => 
                                        <th className="fw-light">{assignment._id} {assignment.title}<br/><span>out of 100</span></th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {enrollments
                                .filter((enrollment: any) => enrollment.course == cid)
                                .map((enrollment) => (
                                    <tr className="text-center">
                                        <td className="text-danger">{enrollment.user}</td>
                                        {assignments
                                            .filter((assignment: any) => assignment.course == cid)
                                            .map((assignment) => {
                                                const grade = grades.find((grade) => grade.student == enrollment.user && grade.assignment == assignment._id);
                                                return <td>{grade ? grade.grade : 'N/A'}</td>;
                                            })
                                        }
                                    </tr>
                                ))
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}