import React, { useEffect } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from "./../../../public/assets/logo.png";

const Topbar = () => {
  const userPresent = useSelector((state) => state.user.userPresent);
  const userData = useSelector((state) => state.user.userData);
  // console.log(typeof userData?.userRole);
  let admin = String(userData?.userRole)?.trim() === "admin";

  useEffect(() => {}, [userPresent, userData]);

  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              <img
                className="top-img"
                src="http://localhost:3000/assets/logo.png"
                alt="logo"
              ></img>
            </Link>
          </li>
          {admin && (
            <li className="topListItem">
              <Link className="link" to="/my-quizzes">
                My Quizzes
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {userPresent && (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/invite">
                Invite
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/profile">
                Profile
              </Link>
            </li>
            {/* <i class="fa-solid fa-arrow-right-from-bracket"></i> */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Topbar;
