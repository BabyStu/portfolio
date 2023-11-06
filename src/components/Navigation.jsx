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
            About
          </div>
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
          <div className="hoverGlow">
            <CircumIcon size={32} name="folder_on" />
            Portfolio
          </div>
        </Link>,
        <Link key={3} className="nav-link text-light" to="/resume">
          <div className="hoverGlow">
            <CircumIcon size={32} name="beer_mug_full" />
            Resume
          </div>
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          <div className="hoverGlow">
            <CircumIcon size={32} name="mail" />
            Contact
          </div>
        </Link>,
      ]}
    />
  );
}
