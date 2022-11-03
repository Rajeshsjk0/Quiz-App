import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles.module.css";

import * as actionType from "../../store/constants/actionTypes";

const Profile = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  let user_image = userData?.userImage;
  // console.log(userData?.userImage);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/");
    // setUser(null);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.right}>
            {/* <h2 className={styles.from_heading}>Profile</h2> */}
            <img
              src={user_image}
              alt="profile"
              className={styles.profile_img}
            />
            <input
              type="text"
              defaultValue={userData?.userName}
              className={styles.input}
              placeholder="UserName"
            />
            <input
              type="text"
              defaultValue={userData?.userEmail}
              className={styles.input}
              placeholder="Email"
            />
            <div>
              {/* <button className={styles.btn}>Update</button> */}
              <button className={styles.btn} onClick={logout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
