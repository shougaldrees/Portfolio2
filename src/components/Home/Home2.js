import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <span className="purple">UI/UX designer, web developer, and graphic designer </span> who’s passionate about crafting thoughtful, user-centered digital experiences.
              <br />
              <br />I fell in love with design and development because it lets me blend creativity with problem-solving. Whether it’s designing intuitive interfaces, building responsive web apps, or creating visual identities. 
              <i>
                <b className="purple"> I love bringing ideas to life. </b>
              </i>
              <br />
              <br />
              I work with tools and technologies like <i>
                <b className="purple"> Figma, React.js, Next.js, Node.js, and Adobe Creative Suite, </b>
              </i>  and I’m always exploring new ways to create meaningful, beautiful, and functional digital products. &nbsp;
              <br />
              <br />
              Whenever possible, I focus on projects that make a difference, specially those at the intersection of  <i>
                <b className="purple">design, technology, and impact.</b></i>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
