import React from "react";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Img1 from "../images/img1.svg";
import Img2 from "../images/img2.svg";

const Login = () => {
  return (
    <div className="login-container">
      <Header />
      <div className="profile-section">
        <h4 style={{ fontWeight: "400", marginTop: "10px" }}>Login as</h4>
        <div className="profile-flex">
          <Profile Img={Img1} name="John Peter" active="Active 1 days ago" />

          <Profile Img={Img2} name="Alina Shmen" active="Active 4 days ago" />
        </div>
      </div>
    </div>
  );
};

export default Login;
