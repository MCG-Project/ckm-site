import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import LogoBlueBG from "../../public/Images/LogoBlueBG.png";
import styles from "../../styles/NavBar.module.css";

export function NavBar() {
  const { isMobile } = useDeviceDetect();

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
    <>
      {isMobile ? (
        <Navbar key="sm" expand="sm" className="sticky-top" id={styles.navbar}>
          <Container fluid>
            <Navbar.Brand href="/">
              <Image alt="ckm logo" src={LogoBlueBG} id={styles.logo}></Image>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-sm"
              id="navtoggle"
              style={{ backgroundColor: "#4c546c" }}
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-sm"
              aria-labelledby="offcanvasNavbar-expand-sm"
              placement="end"
              className="w-50 h-25"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/what-we-do">What We Do</Nav.Link>
                  <Nav.Link href="/services">Services</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ) : (
        // Browser
        <Navbar className="sticky-top" id={styles.navbar}>
          <Container className="hstack gap-3">
            <Navbar.Brand href="/">
              <Image alt="ckm logo" src={LogoBlueBG} id={styles.logo} />
            </Navbar.Brand>

            <Nav className="ms-auto fs-6 fw-bold">
              <Nav.Link href="/what-we-do" id={styles.link}>
                What We Do
              </Nav.Link>
            </Nav>
            <ColoredLine />

            <Nav className="fs-6 fw-bold">
              <Nav.Link href="/services" id={styles.link}>
                Services
              </Nav.Link>
            </Nav>
            <ColoredLine />

            <Nav className="fs-6 fw-bold">
              <Nav.Link href="/contact" id={styles.link}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
}
