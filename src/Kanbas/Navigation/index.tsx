import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { RiInbox2Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { SiAndroidstudio } from "react-icons/si";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { useLocation } from "react-router";
import { MdAccountCircle } from "react-icons/md";

export default function KanbasNavigation(){
    const { pathname } = useLocation();
    const isActive = (path: string) => pathname.includes(path)? 'bg-white text-danger' : 'bg-black text-white';
    return(
        <div id="wd-kanbas-navigation" className="list-group rounded-0"  style={{width: `110px`}}>
            <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0">
                <img src="/images/NEU.jpg" width="80px" />
            </a>
            <a id="wd-account-link" href="#/Kanbas/Account"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Account')}`}>
                <MdAccountCircle className="fs-1" /><br />
                Account
            </a>
            <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Dashboard')}`}>
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </a>
            <a id="wd-course-link" href="#/Kanbas/Courses"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Courses')}`}>
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </a>
            <a id="wd-calendar-link" href="#/Kanbas/Calendar"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Calendar')}`}>
                <SlCalender className="fs-1 text-danger" /><br />
                Calendar
            </a>
            <a id="wd-inbox-link" href="#/Kanbas/Inbox"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Inbox')}`}>
                <RiInbox2Fill className="fs-1 text-danger" /><br />
                Inbox
            </a>
            <a id="wd-history-link" href="#/Kanbas/History"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/History')}`}>
                <MdHistory className="fs-1 text-danger"/><br />
                History
            </a>
            <a id="wd-studio-link" href="#/Kanbas/Studio"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Studio')}`}>
                <SiAndroidstudio className="fs-1 text-danger"/><br />
                Studio
            </a>
            <a id="wd-help-link" href="#/Kanbas/Help"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Help')}`}>
                <IoMdHelpCircleOutline className="fs-1 text-danger"/><br />
                Help
            </a>
            <a id="wd-labs-link" href="#/Labs"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Labs')}`}>
                <CiSettings className="text-danger fs-1"/><br />
                Labs
            </a>
        </div>
    );
}