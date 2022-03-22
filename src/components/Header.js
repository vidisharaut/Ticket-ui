import React from "react";
import Saly from "../images/Saly.svg";
import FormContainer from "./FormContainer";

const Header = () => {
  return (
    <header
      className="header-container
    "
    >
      <div className="header-logo-info">
        <h2>Your Logo</h2>
        <div className="header-subcontainer">
          <div className="desc">
            <h2 style={{ fontSize: "40px", fontWeight: "600" }}>Sign in to</h2>
            <p className="span-h2">Lorem impsum is simply</p>
            <p className="header-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              voluptatum debitis! Sint minus quisquam, iusto voluptatem ratione,
            </p>
          </div>
        </div>
      </div>
      <img src={Saly} alt="A Person sitting on a rocket" />
      <FormContainer />
    </header>
  );
};

export default Header;
