import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import "./styles/footer.css"
const Footer = () => {
  return (
    <footer className="footer mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-logo">
              <img src="logo.png" alt="KEVIN GAMES" style={{ height: '40px', marginRight: '10px' }} />
              KEVIN GAMES
            </h5>
            <p>
              KEVIN GAMES.com is a completely new platform for online game lovers. The best part is that all games available on our website are free and can be enjoyable on multiple devices, including desktop, mobile phones, tablets, and iPhones or iPads.
            </p>
          </Col>

          <Col md={2}>
            <h6>About</h6>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Submit a Game</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h6>Games</h6>
            <ul className="list-unstyled">
              <li><a href="#">Sports Games</a></li>
              <li><a href="#">Action Games</a></li>
              <li><a href="#">Arcade Games</a></li>
              <li><a href="#">Racing Games</a></li>
              <li><a href="#">Adventure Games</a></li>
              <li><a href="#">Girls Games</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Follow Us</h6>
            <ul className="list-unstyled d-flex">
              <li className="mr-3"><a href="#"><FaFacebookF /></a></li>
              <li className="mr-3"><a href="#"><FaTwitter /></a></li>
              <li className="mr-3"><a href="#"><FaInstagram /></a></li>
              <li className="mr-3"><a href="#"><FaLinkedinIn /></a></li>
              <li><a href="#"><FaPinterestP /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
