import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { caseStudies } from "../../data/caseStudies";

function CaseStudyPage() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <p style={{ color: "white" }}>Case study not found.</p>;

  return (
    <Container style={{ paddingTop: 120, color: "white" }}>
      {/* ——— TITLE ——— */}
      <h1 className="purple">{cs.title}</h1>

      {/* ——— META GRID ——— */}
      <Row className="my-4">
        <Col md={3}><strong>COMPANY</strong><br />{cs.company}</Col>
        <Col md={3}><strong>ROLE</strong><br />{cs.role}</Col>
        <Col md={3}><strong>EXPERTISE</strong><br />{cs.expertise}</Col>
        <Col md={3}><strong>YEAR</strong><br />{cs.year}</Col>
      </Row>

      {/* ——— HERO IMAGE ——— */}
      <Image fluid src={cs.hero} rounded className="mb-4" />

      {/* ——— GALLERY ——— */}
      <Row className="mb-5">
        {cs.gallery.map((img, i) => (
          <Col md={4} key={i} className="mb-3">
            <Image fluid src={img} rounded />
          </Col>
        ))}
      </Row>

      {/* ——— SECTIONS ——— */}
      <h3 className="purple">Project Description</h3>
      <p>{cs.timeline}</p>

      <h3 className="purple">Background</h3>
      <p>{cs.background}</p>

      <h3 className="purple">Process</h3>
      <h3 className="purple">Research &amp; Planning</h3>
      <p>{cs.process.research}</p>
      <h3 className="purple">Design &amp; Prototyping</h3>
      <p>{cs.process.design}</p>
<Button 
  as={Link} 
  to="/uiux" 
  variant="outline-light" 
  
>
  ← Back to designs
</Button>
    </Container>
  );
}

export default CaseStudyPage;
