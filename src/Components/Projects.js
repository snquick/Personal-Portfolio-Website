import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webprojImg1 from "../assets/images/studioghibliproject.jpg";
import webprojImg2 from "../assets/images/shelvesproject.png";
import webprojImg3 from "../assets/images/mapmaniagame.jpg";

import javaprojImg1 from "../assets/images/gamingcafeproject.png";
import projImg5 from "../assets/images/project-img1.png";
import projImg6 from "../assets/images/project-img1.png";

import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Studio Ghibli Movies Database",
      description: "Using an API key to retrieve data from a web service",
      imgUrl: webprojImg1,
    },
    {
      title: "Shelves",
      description: "Realtime database that shows available books to order with an interactive, functional shopping cart system",
      imgUrl: webprojImg2,
    },
    {
      title: "Map Mania Game",
      description: "Map Mania is a web application game that utilizes a Google Maps API key",
      imgUrl: webprojImg3,
    },
  ];


  const javaProjects = [
  
    {
      title: "Gaming Café Simulator",
      description: "Developed using Java and multiple design patterns to simulate a gaming cafe environment",
      imgUrl: javaprojImg1,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Projects</Nav.Link> 
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Java Programs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Future Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> My collection of Java projects</p>
                      <Row>
                        { 
                          
                          javaProjects.map((project, index) => {
                            console.log(project);
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                  
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}