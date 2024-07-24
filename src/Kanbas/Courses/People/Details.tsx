import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
import { FaPencil } from "react-icons/fa6";

export default function PeopleDetails({ fetchUsers }:
  { fetchUsers: () => void; }) {
  const navigate = useNavigate();
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };  
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [email, setEmail] = useState("");
  const [editingEmail, setEditingEmail] = useState(false);
  const [role, setRole] = useState("");
  const [editingRole, setEditingRole] = useState(false);

  const { uid, cid } = useParams();
  const [user, setUser] = useState<any>({});
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;

  const saveUserName = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName};
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingName(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  const saveUserEmail = async () => {
    console.log("updating email: ", email);
    const updatedUser = { ...user, email};
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingEmail(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  const saveUserRole = async () => {
    console.log("updating role: ", role);
    const updatedUser = { ...user, role};
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingRole(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </Link>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
      <div className="text-danger fs-4 wd-name"> 
        {!editingName && (
            <FaPencil onClick={() => setEditingName(true)}
                className="float-end fs-5 mt-2 wd-edit" /> )}
        {editingName && (
          <FaCheck onClick={() => saveUserName()}
              className="float-end fs-5 mt-2 me-2 wd-save" /> )}
        {!editingName && (
          <div className="wd-name"
                onClick={() => setEditingName(true)}>
            {user.firstName} {user.lastName}</div>)}
        {user && editingName && (
          <input className="form-control w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveUserName(); }}}
            />
        )}
      </div>

      <br />

      <b>Roles:</b>           
      {!editingRole && (
        <FaPencil onClick={() => setEditingRole(true)}
            className="float-end fs-5 mt-2 wd-edit" /> )}
      {editingRole && (
        <FaCheck onClick={() => saveUserRole()}
            className="float-end fs-5 mt-2 me-2 wd-save" /> )}
      {!editingRole && (
        <div className="wd-name"
              onClick={() => setEditingRole(true)}>
              {user.role}
        </div>)}
      {user && editingRole && (
        <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select w-50 wd-select-role" >
        <option value="">All Roles</option>        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>     <option value="FACULTY">Faculty</option>
        </select>
        )}
      <br />

      <b>Email:</b>           
        <span className="wd-email">                
          {!editingEmail && (
                <FaPencil onClick={() => setEditingEmail(true)}
                    className="float-end fs-5 mt-2 wd-edit" /> )}
            {editingEmail && (
              <FaCheck onClick={() => saveUserEmail()}
                  className="float-end fs-5 mt-2 me-2 wd-save" /> )}
            {!editingEmail && (
              <div className="wd-name"
                    onClick={() => setEditingEmail(true)}>
                    {user.email}
              </div>)}
            {user && editingEmail && (
              <input className="form-control w-50 wd-edit-email"
                defaultValue={`${user.email}`}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { saveUserEmail(); }}}
                />
            )}
        </span> 
        <br />

      <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
      <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
      <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
      <br /><br />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
      <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
              className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
      </div> ); }