import React from "react";
import Form from "../components/Form";



export default function Contact() {
  const Contact = {
    email: "steveweede@yahoo.com",
    github: "BabyStu",
    linkedin: "SteveWeede",
  };

  return (
    <div>
      <h1 className="center">Contacts</h1>
      <div className="flexContainer">
        
        <div >
          <li className="form"><b>Email:</b> {Contact.email}</li>
          <li className="form"><b>Github:</b> {Contact.github}</li>
          <li className="form"><b>LinkedIn:</b> {Contact.linkedin}</li>
        </div>
        <div>
        <Form />
        </div>
      </div>
    </div>
  );
}
