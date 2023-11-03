
export default function Contact() {

  const Contact = {
    email: "steveweede@yahoo.com",
    github: "BabyStu",
    linkedin: "SteveWeede",
  };

  return (
    <div>
      <h1>Contact</h1>
      <p>
       Email: {Contact.email}
       Github: {Contact.github}
       LinkedIn: {Contact.linkedin}
      </p>
    </div>
  );
}
