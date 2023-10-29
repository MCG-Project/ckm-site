import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import Image from "next/image";
import LogoBlueBG from "../../public/Images/LogoBlueBG.png";
import styles from "../../styles/NavBar.module.css";

export function NavBar() {
  const ColoredLine = () => (
    <div className="d-flex align-items-center">
      <div
        className="vr"
        style={{
          color: "#95959c",
          height: "2rem",
        }}
      ></div>
    </div>
  );

  return (
    <Navbar className="sticky-top" id={styles.navbar}>
      <Container className="hstack gap-3">
        <Navbar.Brand href="/">
          <Image alt="ckm logo" src={LogoBlueBG} id={styles.logo}></Image>
        </Navbar.Brand>

        <Nav className="ms-auto fs-6 fw-bold">
          <Nav.Link href="/what-we-do" id={styles.link}>
            What We Do
          </Nav.Link>
        </Nav>
        <ColoredLine />
        <Dropdown as={NavItem}>
          <Dropdown.Toggle
            as={NavLink}
            className="fs-6 fw-bold"
            style={{ padding: "8px" }}
            id={styles.link}
          >
            Services
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/property-sales">Property Sales</Dropdown.Item>
            <Dropdown.Item href="/foreclosures">Foreclosures</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ColoredLine />
        {/* <Nav className="fs-6 fw-bold">
          <Nav.Link href="/reviews" id={styles.link}>
            Reviews
          </Nav.Link>
        </Nav>
        <ColoredLine /> */}
        <Nav className="fs-6 fw-bold">
          <Nav.Link href="/contact" id={styles.link}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
