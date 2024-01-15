import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./navFolder/Navbar";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          <div className="hoverGlow">
            <CircumIcon size={32} name="user" />
            <p className="margin">
            About
            </p>
          </div>
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
          <div className="hoverGlow">
            <CircumIcon size={32} name="folder_on" />
            <p className="margin">
            Projects
            </p>
          </div>
        </Link>,
        <Link key={3} className="nav-link text-light" to="/resume">
          <div className="hoverGlow">
            <CircumIcon size={32} name="beer_mug_full" />
            <p className="margin">
            Resume
            </p>
          </div>
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          <div className="hoverGlow">
            <CircumIcon size={32} name="mail" />
            <p className="margin">
            Contact
            </p>
          </div>
        </Link>,
      ]}
    />
  );
}
