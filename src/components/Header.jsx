import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navFolder/Navbar";
import CircumIcon from "@klarr-agency/circum-icons-react";
import profileImage from "../assets/wingedSteve.jpg";

function Header() {
  return (
    <header>
      <div className="backHead header">
        <h1
          className="row bold topPosition buffer"
          style={{ fontFamily: 'Brush Script MT, cursive' }}
        >
          Steve <img src={profileImage} alt="Steve Weede" className="prof maxSize" /> Weede
        </h1>
        
        <div>
          <Navbar
            links={[
              <NavLink key={1} className="topPosition hoverGlow" to="/">
                <div className="">
                  <CircumIcon size={32} name="beer_mug_full" />
                  <p className="margin">About</p>
                </div>
              </NavLink>,
              <NavLink key={2} className="topPosition hoverGlow" to="/portfolio">
                <div className="">
                  <CircumIcon size={32} name="folder_on" />
                  <p className="margin">Projects</p>
                </div>
              </NavLink>,
              <NavLink key={3} className="topPosition hoverGlow" to="/resume">
                <div className="">
                  <CircumIcon size={32} name="user" />
                  <p className="margin">Resume</p>
                </div>
              </NavLink>,
              <NavLink key={4} className="topPosition hoverGlow" to="/contact">
                <div className="">
                  <CircumIcon size={32} name="mail" />
                  <p className="margin">Contact</p>
                </div>
              </NavLink>,
            ]}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;