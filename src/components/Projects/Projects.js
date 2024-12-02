import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DesiDeals"
              description="A MERN stack-based e-commerce website is a dynamic online platform that utilizes MongoDB, Express.js, React, and Node.js to provide a seamless shopping experience.It allows users to browse products, manage their cart, make secure payments, and track orders, all in real-time."
              ghLink="https://github.com/Piyushsonawane8612/DesiDeals"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ByteBattle"
              description="A quiz website built using Angular is a robust, interactive platform leveraging Angular's powerful framework for creating dynamic and responsive web applications.This project highlights Angular's capabilities to handle complex data flows and dynamic UI updates, making it ideal for creating feature-rich quiz applications."
              ghLink="https://github.com/Piyushsonawane8612/BYTEBATTLE"
              demoLink="https://bytebattle-e87de.web.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Depression Detection Through Visual Inputs"
              description=" The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RealEstate"
              description="Creating a real estate website involves using HTML, CSS, and potentially JavaScript to create an interactive, visually appealing, and user-friendly interface with CSS helps in styling and organizing the layout of the website to ensure a professional look that appeals to potential buyers and sellerswhile a contact section with inquiry forms, chat options, and contact details ensures seamless communication."
              ghLink="https://github.com/Piyushsonawane8612/RealEstate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FitClub"
              description="Building a fitness website using pure CSS with Bootstrap involves creating a modern, responsive, and user-friendly interface tailored for fitness enthusiasts. Bootstrap, a popular front-end framework, simplifies styling and layout management by providing pre-designed classes and components.This combination of pure CSS and Bootstrap provides a scalable, professional, and visually appealing fitness website."
              ghLink="https://github.com/Piyushsonawane8612/Fitclub"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="sign-in/sign-up page"
              description="This animated sign-in/sign-up page offers a sleek and engaging user experience designed to captivate and simplify authentication. The page features smooth transitions, such as a dynamic toggle or slider effect, allowing users to switch effortlessly between the sign-in and sign-up sections with background enhances the aesthetic appeal with subtle animations "
              ghLink="https://github.com/Piyushsonawane8612/Sign-in-Sign-up"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
