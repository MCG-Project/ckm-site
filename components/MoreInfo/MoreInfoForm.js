import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  userData,
  moreInfoInput,
  stateSelects,
  garageSelects,
  basementSelects,
  conditionSelects,
  tenantSelects,
  realtorSelects,
  timeframeSelects,
  availabilitySelects,
} from "./MoreInfoData";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import styles from "../../styles/MoreInfo.module.css";

export function MoreInfoForm(props) {
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_phone, setUser_phone] = useState("");
  const [user_address, setUser_address] = useState("");
  const [user_city, setUser_city] = useState("");
  const [user_state, setUser_state] = useState("");
  const [user_garage, setUser_garage] = useState("");
  const [user_basement, setUser_basement] = useState("");
  const [user_ownership, setUser_ownership] = useState("");
  const [user_condition, setUser_condition] = useState("");
  const [user_repairs, setUser_repairs] = useState("");
  const [user_tenants, setUser_tenants] = useState("");
  const [user_realtor, setUser_realtor] = useState("");
  const [user_timeframe, setUser_timeframe] = useState("");
  const [user_goals, setUser_goals] = useState("");
  const [user_availability, setUser_availability] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);
  const { isMobile } = useDeviceDetect();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    emailjs.init("OFERgPtPZrXndL-iq");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const contactForm = event.target;

      if (true) {
        const response = await emailjs.sendForm(
          "service_pb0eohg",
          "template_cgk0tkf",
          contactForm
        );

        setMessageSent(true);
        // Clear the form fields
        setUser_name("");
        setUser_email("");
        setUser_phone("");
        setMessage("");

        await delay(2000);
        window.location.href = "/";
        sessionStorage.clear();
      }
    };

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [user_name, user_email, user_phone]);

  return (
    <>
      {isMobile ? (
        <Container>
          <Form className="d-flex flex-column pb-5" id="contact-form">
            {/* Data brought over from initial form */}
            <input
              type="hidden"
              name="contact_number"
              value={props.contactNumber}
            />

            {userData.map((item) => (
              <InputGroup className="mt-3">
                <InputGroup.Text id={styles.inputText} className="text-white">
                  {item.formField}
                </InputGroup.Text>
                <Form.Control
                  type={item.type}
                  name={item.name}
                  style={{ backgroundColor: "#c2c2ca" }}
                  value={(() => {
                    switch (item.name) {
                      case "user_name":
                        return props.userName;
                      case "user_email":
                        return props.userEmail;
                      case "user_phone":
                        return props.userPhone;
                      default:
                        return "";
                    }
                  })()}
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
                      default:
                        break;
                    }
                  }}
                  placeholder={item.placeHolder}
                  aria-label={item.formField}
                  aria-describedby={item.formField}
                />
              </InputGroup>
            ))}

            {/* New Data collected on the form */}
            {moreInfoInput.map((item) => (
              <InputGroup className="mt-3">
                <InputGroup.Text id={styles.inputText} className="text-white">
                  {item.formField}
                </InputGroup.Text>

                {/* The select options are below */}
                {item.type === "select" ? (
                  <Form.Select
                    name={item.name}
                    style={{ color: "#6b6d74" }}
                    value={(() => {
                      switch (item.name) {
                        case "user_state":
                          return user_state;
                        case "user_garage":
                          return user_garage;
                        case "user_basement":
                          return user_basement;
                        case "user_condition":
                          return user_condition;
                        case "user_tenants":
                          return user_tenants;
                        case "user_realtor":
                          return user_realtor;
                        case "user_timeframe":
                          return user_timeframe;
                        case "user_availability":
                          return user_availability;
                        default:
                          return "";
                      }
                    })()}
                    onChange={(e) => {
                      switch (item.name) {
                        case "user_state":
                          setUser_state(e.target.value);
                          break;
                        case "user_garage":
                          setUser_garage(e.target.value);
                          break;
                        case "user_basement":
                          setUser_basement(e.target.value);
                          break;
                        case "user_condition":
                          setUser_condition(e.target.value);
                          break;
                        case "user_tenants":
                          setUser_tenants(e.target.value);
                          break;
                        case "user_realtor":
                          setUser_realtor(e.target.value);
                          break;
                        case "user_timeframe":
                          setUser_timeframe(e.target.value);
                          break;
                        case "user_availability":
                          setUser_availability(e.target.value);
                          break;
                        default:
                          break;
                      }
                    }}
                    aria-label={item.formField}
                  >
                    {(() => {
                      switch (item.name) {
                        case "user_state":
                          return stateSelects;
                        case "user_garage":
                          return garageSelects;
                        case "user_basement":
                          return basementSelects;
                        case "user_condition":
                          return conditionSelects;
                        case "user_tenants":
                          return tenantSelects;
                        case "user_realtor":
                          return realtorSelects;
                        case "user_timeframe":
                          return timeframeSelects;
                        case "user_availability":
                          return availabilitySelects;
                        default:
                          return "";
                      }
                    })()}
                  </Form.Select>
                ) : (
                  // Text options are below
                  <Form.Control
                    type={item.type}
                    name={item.name}
                    value={(() => {
                      switch (item.name) {
                        case "user_address":
                          return user_address;
                        case "user_city":
                          return user_city;
                        case "user_ownership":
                          return user_ownership;
                        case "user_repairs":
                          return user_repairs;
                        case "user_goals":
                          return user_goals;
                        default:
                          return "";
                      }
                    })()}
                    onChange={(e) => {
                      switch (item.name) {
                        case "user_address":
                          setUser_address(e.target.value);
                          break;
                        case "user_city":
                          setUser_city(e.target.value);
                          break;
                        case "user_state":
                          setUser_state(e.target.value);
                          break;
                        case "user_garage":
                          setUser_garage(e.target.value);
                          break;
                        case "user_basement":
                          setUser_basement(e.target.value);
                          break;
                        case "user_ownership":
                          setUser_ownership(e.target.value);
                          break;
                        case "user_condition":
                          setUser_condition(e.target.value);
                          break;
                        case "user_repairs":
                          setUser_repairs(e.target.value);
                          break;
                        case "user_tenants":
                          setUser_tenants(e.target.value);
                          break;
                        case "user_realtor":
                          setUser_realtor(e.target.value);
                          break;
                        case "user_timeframe":
                          setUser_timeframe(e.target.value);
                          break;
                        case "user_goals":
                          setUser_goals(e.target.value);
                          break;
                        case "user_availability":
                          setUser_availability(e.target.value);
                          break;
                        default:
                          break;
                      }
                    }}
                    placeholder={item.placeHolder}
                    aria-label={item.formField}
                    aria-describedby={item.formField}
                  />
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
          >
            {/* Data brought over from initial form */}
            <input
              type="hidden"
              name="contact_number"
              value={props.contactNumber}
            />

            {userData.map((item) => (
              <InputGroup className="mt-3">
                <InputGroup.Text id={styles.inputText} className="text-white">
                  {item.formField}
                </InputGroup.Text>
                <Form.Control
                  type={item.type}
                  name={item.name}
                  style={{ backgroundColor: "#c2c2ca" }}
                  value={(() => {
                    switch (item.name) {
                      case "user_name":
                        return props.userName;
                      case "user_email":
                        return props.userEmail;
                      case "user_phone":
                        return props.userPhone;
                      default:
                        return "";
                    }
                  })()}
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
                      default:
                        break;
                    }
                  }}
                  placeholder={item.placeHolder}
                  aria-label={item.formField}
                  aria-describedby={item.formField}
                />
              </InputGroup>
            ))}

            {/* New Data collected on the form */}
            {moreInfoInput.map((item) => (
              <InputGroup className="mt-3">
                <InputGroup.Text id={styles.inputText} className="text-white">
                  {item.formField}
                </InputGroup.Text>

                {/* The select options are below */}
                {item.type === "select" ? (
                  <Form.Select
                    name={item.name}
                    style={{ color: "#6b6d74" }}
                    value={(() => {
                      switch (item.name) {
                        case "user_state":
                          return user_state;
                        case "user_garage":
                          return user_garage;
                        case "user_basement":
                          return user_basement;
                        case "user_condition":
                          return user_condition;
                        case "user_tenants":
                          return user_tenants;
                        case "user_realtor":
                          return user_realtor;
                        case "user_timeframe":
                          return user_timeframe;
                        case "user_availability":
                          return user_availability;
                        default:
                          return "";
                      }
                    })()}
                    onChange={(e) => {
                      switch (item.name) {
                        case "user_state":
                          setUser_state(e.target.value);
                          break;
                        case "user_garage":
                          setUser_garage(e.target.value);
                          break;
                        case "user_basement":
                          setUser_basement(e.target.value);
                          break;
                        case "user_condition":
                          setUser_condition(e.target.value);
                          break;
                        case "user_tenants":
                          setUser_tenants(e.target.value);
                          break;
                        case "user_realtor":
                          setUser_realtor(e.target.value);
                          break;
                        case "user_timeframe":
                          setUser_timeframe(e.target.value);
                          break;
                        case "user_availability":
                          setUser_availability(e.target.value);
                          break;
                        default:
                          break;
                      }
                    }}
                    aria-label={item.formField}
                  >
                    {(() => {
                      switch (item.name) {
                        case "user_state":
                          return stateSelects;
                        case "user_garage":
                          return garageSelects;
                        case "user_basement":
                          return basementSelects;
                        case "user_condition":
                          return conditionSelects;
                        case "user_tenants":
                          return tenantSelects;
                        case "user_realtor":
                          return realtorSelects;
                        case "user_timeframe":
                          return timeframeSelects;
                        case "user_availability":
                          return availabilitySelects;
                        default:
                          return "";
                      }
                    })()}
                  </Form.Select>
                ) : (
                  // Text options are below
                  <Form.Control
                    type={item.type}
                    name={item.name}
                    value={(() => {
                      switch (item.name) {
                        case "user_address":
                          return user_address;
                        case "user_city":
                          return user_city;
                        case "user_ownership":
                          return user_ownership;
                        case "user_repairs":
                          return user_repairs;
                        case "user_goals":
                          return user_goals;
                        default:
                          return "";
                      }
                    })()}
                    onChange={(e) => {
                      switch (item.name) {
                        case "user_address":
                          setUser_address(e.target.value);
                          break;
                        case "user_city":
                          setUser_city(e.target.value);
                          break;
                        case "user_state":
                          setUser_state(e.target.value);
                          break;
                        case "user_garage":
                          setUser_garage(e.target.value);
                          break;
                        case "user_basement":
                          setUser_basement(e.target.value);
                          break;
                        case "user_ownership":
                          setUser_ownership(e.target.value);
                          break;
                        case "user_condition":
                          setUser_condition(e.target.value);
                          break;
                        case "user_repairs":
                          setUser_repairs(e.target.value);
                          break;
                        case "user_tenants":
                          setUser_tenants(e.target.value);
                          break;
                        case "user_realtor":
                          setUser_realtor(e.target.value);
                          break;
                        case "user_timeframe":
                          setUser_timeframe(e.target.value);
                          break;
                        case "user_goals":
                          setUser_goals(e.target.value);
                          break;
                        case "user_availability":
                          setUser_availability(e.target.value);
                          break;
                        default:
                          break;
                      }
                    }}
                    placeholder={item.placeHolder}
                    aria-label={item.formField}
                    aria-describedby={item.formField}
                  />
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
