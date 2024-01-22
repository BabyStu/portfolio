import { NavLink } from "react-router-dom";
import React from "react";
import Navbar from "./navFolder/Navbar";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function Nav() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className="hoverGlow" to="/" exact activeclassname="hoverGlowRed">
          <div className="">
            <CircumIcon size={32} name="user" />
            <p className="margin">About</p>
          </div>
        </NavLink>,
        <NavLink key={2} className="hoverGlow" to="/portfolio" exact activeclassname="hoverGlowRed">
          <div className="">
            <CircumIcon size={32} name="folder_on" />
            <p className="margin">Projects</p>
          </div>
        </NavLink>,
        <NavLink key={3} className="hoverGlow" to="/resume" exact activeclassname="hoverGlowRed">
          <div className="">
            <CircumIcon size={32} name="beer_mug_full" />
            <p className="margin">Resume</p>
          </div>
        </NavLink>,
        <NavLink key={4} className="hoverGlow" to="/contact" exact activeclassname="hoverGlowRed">
          <div className="">
            <CircumIcon size={32} name="mail" />
            <p className="margin">Contact</p>
          </div>
        </NavLink>,
      ]}
    />
  );
}
