import GradesControl from "./GradesControl";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";


export default function Grades(){
    return(
        <div id="wd-grades" className="ms-5">
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
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="table-secondary text-center">
                            <th>Student Name</th><th>A1 SETUP<br/><span>Out of 100</span></th>
                            <th>A2 HTML<br/><span>Out of 100</span></th>
                            <th>A3 CSS<br/><span>Out of 100</span></th>
                            <th>A4 BOOTSTRAP<br/><span>Out of 100</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="text-danger">Jane Adams</td><td>100%</td><td>96.67%</td><td>92.18%</td><td>66.22%</td>
                        </tr>
                        <tr className="table-secondary text-center">
                            <td className="text-danger">Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                        </tr>
                        <tr className="text-center">
                            <td className="text-danger">Samreen Ansari</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                        </tr>
                        <tr className="table-secondary text-center">
                            <td className="text-danger">Han Bao</td><td>100%</td><td>100%</td>
                            <td><input type="text" className="form-control text-center" defaultValue="100%"/></td>
                            <td>98.99%</td>
                        </tr>
                        <tr className="text-center">
                            <td className="text-danger">Samreen Ansari</td><td>100%</td><td>96.67%</td><td>98.37%</td><td>100%</td>
                        </tr>
                        <tr className="table-secondary text-center">
                            <td className="text-danger">Siran Cao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}