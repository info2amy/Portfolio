import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const { from_name, from_email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: from_name,
      from_email: from_email,
      message: message,
    };

    emailjs
      .send(
        "default_service",
        "template_vvqr1gp",
        templateParams,
        "user_Lt2O3GLKrIwzyeKxK9lMn"
      )
      .then(handleSend());
  };

  const handleSend = () => {
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Name</label> <br />
          <input
            name="from_name"
            value={from_name}
            type="text"
            required
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <label>Email</label> <br />
          <input
            name="from_email"
            value={from_email}
            type="email"
            required
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <label>Message</label> <br />
          <input
            name="message"
            value={message}
            type="text"
            required
            rowsMax={8}
            multiline
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <button className="send-button" type="submit" value="Send">
            Send this Message
          </button>
        </form>
      </section>
    </div>
  );
}
