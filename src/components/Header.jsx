import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navFolder/Navbar";
import CircumIcon from "@klarr-agency/circum-icons-react";
import profileImage from "../assets/wingedSteve.jpg";


function Header() {
  return (
    <header 
    >
    <div className="backHead">
      <h1
        className="row bold topPosition buffer"
        style={{ fontFamily: 'Brush Script MT, cursive' }}
      >
        Steve <img src={profileImage} alt="Steve Weede" className="prof maxSize" /> Weede
      </h1>
      
      
      <div>
      <Navbar
      links={[
        <Link key={1} className="nav-link text-light topPosition" to="/">
          <div className="hoverGlow">
            <CircumIcon size={32} name="user" />
            <p className="margin">
            About
            </p>
          </div>
        </Link>,
        <Link key={2} className="nav-link text-light topPosition" to="/portfolio">
          <div className="hoverGlow">
            <CircumIcon size={32} name="folder_on" />
            <p className="margin">
            Projects
            </p>
          </div>
        </Link>,
        <Link key={3} className="nav-link text-light topPosition" to="/resume">
          <div className="hoverGlow">
            <CircumIcon size={32} name="beer_mug_full" />
            <p className="margin">
            Resume
            </p>
          </div>
        </Link>,
        <Link key={4} className="nav-link text-light topPosition" to="/contact">
          <div className="hoverGlow">
            <CircumIcon size={32} name="mail" />
            <p className="margin">
            Contact
            </p>
          </div>
        </Link>,
      ]}
    />
      </div>
      </div>
    </header>
    
    
    
    
  );
}

export default Header;
