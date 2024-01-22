import React from "react";
import Form from "../components/Form";

export default function Contact() {
  const Contact = {
    email: "steveweede@yahoo.com",
    github: "BabyStu",
    linkedin: "stevenweede",
  };

  return (
    <div className="">
      <h1 className="center contactBox font">Contacts</h1>
      <div className="flexContainer">
        <div className="biggerText">
          <li className="form anchors">
            <b className="hGold">Email@</b>{" "}
            <a className="" href={`mailto:${Contact.email}`}>{Contact.email}</a>
          </li>
          <li className="form anchors">
            <b className="hGold">Github@ </b>
            <a
              className=""
              href={`https://github.com/${Contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Contact.github}
            </a>
          </li>
          <li className="form anchors">
            <b className="hGold">LinkedIn@</b>{" "}
            <a
              className=""
              href={`https://www.linkedin.com/in/${Contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Contact.linkedin}
            </a>
          </li>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
