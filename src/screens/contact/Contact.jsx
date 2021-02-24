import React from 'react'

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
        // ?????
        templateParams,
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
    <div>
      
    </div>
  )
}
