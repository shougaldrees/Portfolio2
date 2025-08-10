// src/components/UIUX/UIUX.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";                 // ← same level up one folder
import ProjectCard from "../Projects/ProjectCards"; // ← sibling folder

// image imports (two levels up to /Assets)
import redesign   from "../../Assets/UIUX/moraba-hero.png";
import dashboard  from "../../Assets/UIUX/realestate-hero.png";
import mobileApp  from "../../Assets/UIUX/bank-hero.png";
import infApp  from "../../Assets/UIUX/inf-hero.png";
import d6App  from "../../Assets/UIUX/d6logo.png";

function UIUX() {
  return (
    <Container fluid className="uiux-section" style={{ paddingTop: "140px" }}>
      <Particle />

      <Container>
        <h1 className="uiux-heading">
          My Recent <strong className="purple">Designs</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few UI/UX projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infApp}
              title="InfluenceME"
              description="A mobile platform designed to connect businesses with influencers across the Middle East. The app helps brands manage campaigns, track performance, and collaborate with content creators through a clean, data-driven dashboard. Built with accessibility, regional relevance, and creator-brand transparency in mind."
              caseStudyLink="/case-study/inf-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d6App}
              title="District Six"
              description="A mobile-first community platform connecting Jamaica Plain and West Roxbury residents to local resources, events, and services, with bilingual support, an interactive map, and tools to foster civic engagement"
              caseStudyLink="/case-study/d6-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileApp}
              title="Bank of Saudi "
              description=" A feature-rich mobile banking app designed to simplify financial management for users in Saudi Arabia. The app focuses on accessibility and multilingual support—especially Arabic and English—to make everyday tasks like transfers, bill payments, and account tracking intuitive and inclusive for a diverse user base."
              caseStudyLink="/case-study/bank-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              title="Real Estate App"
              description="A Saudi real estate app designed for effortless property search, with Arabic-first UI, high-quality listings, and quick contact options."
              caseStudyLink="/case-study/realestate-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redesign}
              title="Moraba App (E-commerce)"
              description="A Saudi e-commerce app offering a fast, Arabic-first shopping experience with clear product categories, exclusive deals, and a seamless cart-to-checkout flow."
              caseStudyLink="/case-study/moraba-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default UIUX;

