import React from "react";

import { MdOutlineCancel } from "react-icons/md";

const Profile = ({ Img, name, active }) => {
  return (
    <div>
      <div className="profile-container">
        <MdOutlineCancel className="cancel" />
        <img className="profile-img" src={Img} alt={name} />
        <strong style={{ fontSize: "16px" }}>{name}</strong>
        <p>{active}</p>
      </div>
    </div>
  );
};

export default Profile;
