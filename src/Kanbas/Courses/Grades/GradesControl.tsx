import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

export default function GradesControl(){
    return(
        <div id="wd-assignments-control" className="d-flex flex-nowrap text-nowrap float-end">
            <button id="wd-import" className="btn btn-lg btn-secondary me-1">
                <CiImport className="fs-5 me-2"/>Import
            </button>
            <button id="wd-export" className="btn btn-lg btn-secondary me-1">
                <CiExport className="fs-5 me-2"/>Export
                <FaChevronDown className="fs-5 ms-2"/>
            </button>
            <button id="wd-grades-setting" className="btn btn-secondary ">
                <IoIosSettings className="fs-3"/>
            </button>
        </div>
    );
}