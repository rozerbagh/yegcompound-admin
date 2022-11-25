import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="http://yegcompounding.com"
              target="_blank"
            >
              ADMIN Niks Pharmacy
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
