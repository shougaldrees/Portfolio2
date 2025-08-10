// src/pages/GraphicDesign.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import GraphicCard from "../Projects/GraphicCard";

// Images (replace with your actual files/paths)
import alulaPoster from "../../Assets/Graphics/seda.png";
import startupCarousel from "../../Assets/Graphics/splash.png";
import dotmapLogo from "../../Assets/Graphics/ski.png";
import communityPoster from "../../Assets/Graphics/peerled.png";
import bankSocial from "../../Assets/Graphics/wm.png";
import clubIdentity from "../../Assets/Graphics/pizza.png";
import matcha from "../../Assets/Graphics/matcha.png";


const graphics = [
  {
    img: alulaPoster,
    title: "SEDA - صيدة",
    desc:
      "A promotional poster for the Saudi Cultural Club’s Annual Scavenger Hunt, featuring a nightscape of BU’s iconic Center for Computing & Data Sciences (the ‘Jenga’ building). Modern Arabic typography meets playful cultural symbolism to capture the spirit of exploration and discovery.",
  },
  {
    img: startupCarousel,
    title: "SPLASH",
    desc:
      "Splash event poster for BU’s Saudi Cultural Club, blending playful 3D typography with a bold summer palette.",
  },
  {
    img: dotmapLogo,
    title: "SKI TRIP",
    desc:
      "Event poster for BU’s Saudi Cultural Club annual ski trip, combining minimal layout with bold type and spacious winter imagery.",
  },
  {
    img: communityPoster,
    title: "PEER-LED PATHWAYS",
    desc:
      "Networking event poster for BU’s Saudi Cultural Club, using bold typography, textured backgrounds, and symbolic imagery to promote peer-led connections..",
  },
  {
    img: bankSocial,
    title: "WELCOME MEET-UP",
    desc:
      "Welcome meetup poster for BU’s Saudi Cultural Club, featuring a playful laptop-sticker concept to highlight community, culture, and student life.",
  },
  {
    img: clubIdentity,
    title: "PIZZA NIGHT",
    desc:
      "Pizza Night poster for BU’s Saudi Cultural Club, blending event-night fun with traditional Saudi cultural elements.",
  },

  {
    img: matcha,
    title: "SoMatcha",
    desc:
      "Promotional poster design for SoMatcha’s Strawberry Matcha. Created a vibrant, playful composition combining photography and illustrated elements to capture the drink’s fresh, sweet, and energizing appeal.",
  },

];

export default function GraphicDesign() {
  return (
    <Container fluid className="graphic-section" style={{ paddingTop: "140px" }}>
      <Particle />

      <Container>
        <h1 className="uiux-heading">
          My Recent <strong className="purple">Graphic Designs</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of posters, logos, social packs, and brand visuals. Each card
          includes a brief description.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {graphics.map((g, i) => (
            <Col md={4} className="project-card" key={i}>
              <GraphicCard imgPath={g.img} title={g.title} description={g.desc} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
