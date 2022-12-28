import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
            <div class="css-0">
            <img class="chakra-image css-15qnx1r"
             src="https://res.cloudinary.com/ddyvv0new/image/upload/v1668697314/dan_ethiopia-min_urqimk.png"/></div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              Developing African Nations, DAN Energy, is a pioneering, multi-locational, 
              exponentially growing company with full spectrum R&D, information technologies, 
              business & knowledge process outsourcing services, training and placement company. 
              To meet it's mission of Developing African Nations, Dan Venture Capital wing encourages entreprenuers,
               incubating startups, businesses for mass employment with focus on the youth, mothers and sisters of Africa. 
               With mosttechnologies digested, which are being integrated, offered seamlessly, for clients, NGOs, Governments use.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={2} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Tranning Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
