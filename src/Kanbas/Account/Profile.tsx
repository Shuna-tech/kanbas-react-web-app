import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <div className="d-flex align-items-center mb-3">
            <label htmlFor="username" className="form-label me-2" style={{ width: '10%' }}>Username</label>
            <input className="wd-username form-control mb-2" value={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          </div>

          <div className="d-flex align-items-center mb-3">
            <label htmlFor="password" className="form-label me-2" style={{ width: '10%' }}>Password</label>
            <input className="wd-password form-control mb-2" value={profile.password}
              onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          </div>

          <div className="d-flex align-items-center mb-3">
            <label htmlFor="firstname" className="form-label me-2" style={{ width: '10%' }}>First Name</label>
            <input className="wd-firstname form-control mb-2" value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          </div>

          <div className="d-flex align-items-center mb-3">
            <label htmlFor="lastname" className="form-label me-2" style={{ width: '10%' }}>Last Name</label>
            <input className="wd-lastname form-control mb-2" value={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          </div>

          <div className="d-flex align-items-center mb-3">
            <label htmlFor="dob" className="form-label me-2" style={{ width: '10%' }}>Date of Birth</label>
            <input className="wd-dob form-control mb-2" value={profile.dob}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" />
          </div>

          <div className="d-flex align-items-center mb-3">
            <label htmlFor="email" className="form-label me-2" style={{ width: '10%' }}>Email</label>
            <input className="wd-email form-control mb-2" value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>

          <div className="d-flex align-items-center mb-3">
            <label htmlFor="role" className="form-label me-2" style={{ width: '10%' }}>Role</label>
            <select className="wd-role form-control mb-2"
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
