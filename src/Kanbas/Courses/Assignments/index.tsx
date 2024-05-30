import AssignmentsControls from "./AssignmensControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

export default function Assignments() {
    return (
      <div id="wd-assignments" className="ms-5">
        <AssignmentsControls /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="ms-1 me-2 fs-3"/>
              <IoMdArrowDropdown className="me-3 fs-3"/>
              <span className="fw-bold">ASSIGNMENTS</span>
              <div className="d-flex align-items-center float-end">
                <div className="border border-secondary p-1 rounded-5 me-2">40% of Total</div>
                <BsPlusLg className="fs-4 me-1 ms-1"/>
                <IoEllipsisVertical className="fs-4 me-1 ms-1"/>
              </div>
            </div>
          </li>
        </ul>
        <ul id="wd-assignment-list" className="list-group rounded-0 border-left-green border-gray">
          <li className="wd-assignment-list-item list-group-item p-0 fs-5 d-flex align-items-center text-nowrap">
            <div className="ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-2 fs-3 text-success" />
            </div>
            <div className="p-3 flex-grow-1">
              <div>
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-dark fw-bold text-decoration-none">
                  A1
                </a>
              </div>
              <div>
                <span className="text-danger">Multiple Modules</span>
                <span className="mx-2">|</span>
                <span className="text-muted fw-bold">Not available until </span>
                <span >May 6 at 12:00am</span>
                <span className="mx-2">|</span>
              </div>
              <div>
                <span className="text-muted fw-bold">Due </span>
                <span className="text-muted">May 13 at 11:59pm</span>
                <span className="mx-2">|</span>
                <span className="text-muted">100 pts</span>
              </div>
            </div>
            <div className="float-end">
              <GreenCheckmark />
              <IoEllipsisVertical  className="ms-2 me-3 fs-3"/>                
            </div>
          </li>
          
          <li className="wd-assignment-list-item list-group-item p-0 fs-5 d-flex align-items-center text-nowrap">
            <div className="ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-2 fs-3 text-success" />
            </div>
            <div className="p-3 flex-grow-1">
              <div>
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-dark fw-bold text-decoration-none">
                  A2
                </a>
              </div>
              <div>
                <span className="text-danger">Multiple Modules</span>
                <span className="mx-2">|</span>
                <span className="text-muted fw-bold">Not available until </span>
                <span >May 13 at 12:00am</span>
                <span className="mx-2">|</span>
              </div>
              <div>
                <span className="text-muted  fw-bold">Due </span>
                <span className="text-muted">May 20 at 11:59pm</span>
                <span className="mx-2">|</span>
                <span className="text-muted">100 pts</span>
              </div> 
            </div>
            <div className="float-end">
              <GreenCheckmark />
              <IoEllipsisVertical  className="ms-2 me-3 fs-3"/>
            </div>
          </li>

          <li className="wd-assignment-list-item list-group-item p-0 fs-5 d-flex align-items-center text-nowrap">
            <div className="ps-2">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-2 fs-3 text-success" />
            </div>
            <div className="p-3 flex-grow-1">
              <div>
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-dark fw-bold text-decoration-none">
                  A3
                </a>
              </div>
              <div>
                <span className="text-danger">Multiple Modules</span>
                <span className="mx-2">|</span>
                <span className="text-muted fw-bold">Not available until </span>
                <span >May 20 at 12:00am</span>
                <span className="mx-2">|</span>
              </div>
              <div>
                <span className="text-muted fw-bold">Due </span>
                <span className="text-muted">May 27 at 11:59pm</span>
                <span className="mx-2">|</span>
                <span className="text-muted">100 pts</span>
              </div> 
            </div>
            <div className="float-end">
              <GreenCheckmark />
              <IoEllipsisVertical  className="ms-2 me-3 fs-3"/>
            </div>
          </li>
        </ul>
      </div>
  );}
  
