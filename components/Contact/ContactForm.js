import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Form, Button, InputGroup, Container } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";

export function ContactForm() {
  const [formErrors, setFormErrors] = useState({});
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_phone, setUser_phone] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);
  const { isMobile } = useDeviceDetect();

  const contactFormData = [
    {
      formField: "Name",
      type: "text",
      name: "user_name",
      placeHolder: "Enter Name",
    },
    {
      formField: "Email",
      type: "email",
      name: "user_email",
      placeHolder: "Enter Email",
    },
    {
      formField: "Phone",
      type: "phone",
      name: "user_phone",
      placeHolder: "Enter Phone",
    },
    {
      formField: "Message",
      type: "",
      name: "message",
      placeHolder: "Enter you message here...",
      as: "textarea",
    },
  ];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const validateForm = () => {
    const errors = {};

    if (!user_name.trim()) {
      errors.user_name = "Name is required";
    }

    if (!user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user_email)) {
      errors.user_email = "Invalid email address";
    }

    if (!user_phone.trim()) {
      errors.user_phone = "Phone number is required";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const contactForm = event.target;

    const isValid = validateForm();
    let userData = [];

    if (isValid) {
      contactForm.contact_number.value = (Math.random() * 100000) | 0;

      try {
        emailjs.init("OFERgPtPZrXndL-iq");

        const response = await emailjs.sendForm(
          "service_pb0eohg",
          "template_qq9bab7",
          contactForm
        );

        userData.push({
          userName: user_name,
          userEmail: user_email,
          userPhone: user_phone,
          contactNumber: contactForm.contact_number.value,
        });

        sessionStorage.setItem("userInput", JSON.stringify(userData));

        setMessageSent(true);

        setUser_name("");
        setUser_email("");
        setUser_phone("");
        setMessage("");

        await delay(1000);
        window.location.href = "/more-info";
      } catch (error) {
        console.error("FAILED...", error);
        alert("Message not sent!");
      }
    } else {
      alert("Please correct the form errors before submitting.");
    }
  };

  return (
    <>
      {isMobile ? (
        <Container className="d-flex flex-column mt-3">
          <Form className="" id="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="contact_number" />
            {contactFormData.map((item) => (
              <InputGroup className="mt-3" key={item.name}>
                <InputGroup.Text id={styles.inputText} className="text-white">
                  {item.formField}
                </InputGroup.Text>
                <Form.Control
                  type={item.type}
                  name={item.name}
                  value={
                    item.name === "user_name"
                      ? user_name
                      : item.name === "user_email"
                      ? user_email
                      : item.name === "user_phone"
                      ? user_phone
                      : item.name === "message"
                      ? message
                      : ""
                  }
                  onChange={(e) => {
                    switch (item.name) {
                      case "user_name":
                        setUser_name(e.target.value);
                        break;
                      case "user_email":
                        setUser_email(e.target.value);
                        break;
                      case "user_phone":
                        setUser_phone(e.target.value);
                        break;
                      case "message":
                        setMessage(e.target.value);
                        break;
                      default:
                        break;
                    }
                  }}
                  placeholder={item.placeHolder}
                  aria-label={item.formField}
                  aria-describedby={item.formField}
                  as={item.as}
                />
                {formErrors[item.name] && (
                  <div className={styles.errorMessage}>
                    {formErrors[item.name]}
                  </div>
                )}
              </InputGroup>
            ))}

            <Button type="submit" className="fw-bold w-25 mt-3" variant="dark">
              SEND
            </Button>
            {isMessageSent && (
              <div className={styles.successMessage}>Message Sent!</div>
            )}
          </Form>
        </Container>
      ) : (
        // Browser
        <Container className="d-flex align-items-center flex-column">
          <Form
            className="d-flex align-items-center flex-column w-50"
            id="contact-form"
            onSubmit={handleSubmit} // Add onSubmit handler
          >
            <input type="hidden" name="contact_number" />
            {contactFormData.map((item) => (
              <InputGroup className="mt-3" key={item.name}>
                <InputGroup.Text id={styles.inputText} className="text-white">
                  {item.formField}
                </InputGroup.Text>
                <Form.Control
                  type={item.type}
                  name={item.name}
                  value={
                    item.name === "user_name"
                      ? user_name
                      : item.name === "user_email"
                      ? user_email
                      : item.name === "user_phone"
                      ? user_phone
                      : item.name === "message"
                      ? message
                      : ""
                  }
                  onChange={(e) => {
                    switch (item.name) {
                      case "user_name":
                        setUser_name(e.target.value);
                        break;
                      case "user_email":
                        setUser_email(e.target.value);
                        break;
                      case "user_phone":
                        setUser_phone(e.target.value);
                        break;
                      case "message":
                        setMessage(e.target.value);
                        break;
                      default:
                        break;
                    }
                  }}
                  placeholder={item.placeHolder}
                  aria-label={item.formField}
                  aria-describedby={item.formField}
                  as={item.as}
                />
                {formErrors[item.name] && (
                  <div className={styles.errorMessage}>
                    {formErrors[item.name]}
                  </div>
                )}
              </InputGroup>
            ))}

            <Button type="submit" className="fw-bold w-25 mt-3" variant="dark">
              SEND
            </Button>
            {isMessageSent && (
              <div className={styles.successMessage}>Message Sent!</div>
            )}
          </Form>
        </Container>
      )}
    </>
  );
}
