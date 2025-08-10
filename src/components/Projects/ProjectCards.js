// src/components/Projects/ProjectCards.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";        // ← internal routing

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  caseStudyLink,   // ← NEW
  isBlog = false,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {/* —— UI/UX mode —— */}
        {caseStudyLink ? (
          <Button as={Link} to={caseStudyLink} variant="primary">
            <FaBookOpen /> &nbsp; Case Study
          </Button>
        ) : (
          /* —— Dev-project mode —— */
          <>
            <Button variant="primary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
            </Button>

            {!isBlog && demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
