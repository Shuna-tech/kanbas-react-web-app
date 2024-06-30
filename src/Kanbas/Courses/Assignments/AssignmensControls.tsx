import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import AssignmentEditor from "./Editor";
import { useParams, useNavigate } from 'react-router-dom';

export default function AssignmentsControls(){
    const navigate = useNavigate();
    const { cid } = useParams(); 
    const goToAssignmentEditor = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/new`)
    };

    return(
        <div id="wd-assignments-controls" className="d-flex flex-nowrap text-nowrap">
            <div className="input-group me-5">
                <span className="input-group-text"><CiSearch /></span>
                <input id="wd-search-assignments" type="text" className="form-control" placeholder="Search..."/>
            </div>
            <button id="wd-group" className="btn btn-lg btn-secondary me-1">
                <FaPlus className="fs-5 me-1" />
                Group
            </button>
            <button id="wd-assignment" className="btn btn-lg btn-danger text-white"
                onClick={goToAssignmentEditor}>
                <FaPlus className="fs-5 me-1" />
                Assignment
            </button>
        </div>
    );
}