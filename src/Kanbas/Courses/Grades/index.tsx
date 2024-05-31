import GradesControl from "./GradesControl";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { LiaFileExportSolid } from "react-icons/lia";

export default function Grades(){
    return(
        <div id="wd-grades" className="ms-5 container">
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
                                <th style={{width:"20%"}}>Student Name</th>
                                <th className="fw-light" style={{width:"20%"}}>A1 SETUP<br/><span>Out of 100</span></th>
                                <th className="fw-light" style={{width:"20%"}}>A2 HTML<br/><span>Out of 100</span></th>
                                <th className="fw-light" style={{width:"20%"}}>A3 CSS<br/><span>Out of 100</span></th>
                                <th className="fw-light" style={{width:"20%"}}>A4 BOOTSTRAP<br/><span>Out of 100</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="text-danger">Jane Adams</td><td>100%</td><td>96.67%</td><td>92.18%</td><td>66.22%</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-danger">Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-danger">Samreen Ansari</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-danger">Han Bao</td><td>100%</td><td>100%</td>
                                <td>
                                    <div className="input-group">
                                        <input type="text" className="form-control text-center me-1" defaultValue="100%"/>
                                        <span className="fs-5"><LiaFileExportSolid /></span>
                                    </div>
                                </td>
                                <td>98.99%</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-danger">Mahi Sai Srinivas Bobbili</td><td>100%</td><td>96.67%</td><td>98.37%</td><td>100%</td>
                            </tr>
                            <tr className="text-center">
                                <td className="text-danger">Siran Cao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}