import { Link, useLocation} from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.account);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Account/${link}`} className={`border border-0 list-group-item text-danger
           ${ pathname.includes(link) ? 'active': '' }`}> {link} </Link>
      ))}
    </div>
  );
}
