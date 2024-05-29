import { MdOutlineUnpublished } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { LuImport } from "react-icons/lu";
import { AiOutlineImport } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function CourseStatus(){
    return(
        <div id="course-status">
            <h2>Course Status</h2>
            <button id="wd-unpublish-btn" className="btn btn-secondary me-1">
                <MdOutlineUnpublished className="fs-5 me-1"/>
                Unpublish</button>
            <button id="wd-publish-btn" className="btn bg-success text-white">
                <MdOutlinePublishedWithChanges className="fs-5 me-1"/>
                Publish</button><br/>
            <br/>
            <button id="wd-import-content-btn" className="btn btn-secondary mb-1" style={{width: '300px', textAlign: 'left'}}>
                <LuImport className="fs-5 me-1"/>
                Import Existing Content</button><br/>
            <button id="wd-import-commons-btn" className="btn btn-secondary mb-1" style={{width: '300px', textAlign: 'left'}}>
                <AiOutlineImport className="fs-5 me-1"/>
                Import from Commons</button><br/>
            <button id="wd-choose-home-btn" className="btn btn-secondary mb-1" style={{width: '300px', textAlign: 'left'}}>
                <IoHomeOutline className="fs-5 me-1"/>
                Choose Home Page</button><br/>
            <button id="wd-course-stream-btn" className="btn btn-secondary mb-1" style={{width: '300px', textAlign: 'left'}}>
                <MdOutlineGridView className="fs-5 me-1"/>
                View Course Stream</button><br/>
            <button id="wd-new-announcements-btn" className="btn btn-secondary mb-1" style={{width: '300px', textAlign: 'left'}}>
                <TfiAnnouncement className="fs-5 me-1"/>
                New Announcement</button><br/>
            <button id="wd-new-analytics-btn" className="btn btn-secondary mb-1" style={{width: '300px', textAlign: 'left'}}>
                <TbBrandGoogleAnalytics className="fs-5 me-1"/>
                New Analytics</button><br/>
            <button id="wd-course-notification-btn" className="btn btn-secondary mb-1" style={{width: '300px', textAlign: 'left'}}>
                <IoIosNotificationsOutline className="fs-5 me-1"/>
                View Course Notification</button><br/>
        </div>
    );
}