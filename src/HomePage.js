import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Card } from 'react-bootstrap';
import './styles/Homepage.css'
const HomePage = () => {
    const [playGame, setPlayGame] = useState(false);
    return (
        <Container fluid className="p-0">
            {/* Navbar */}
            <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
                <Navbar.Brand href="#">KEVIN GAMES</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#">Sports</Nav.Link>
                    <Nav.Link href="#">Action</Nav.Link>
                    <Nav.Link href="#">Cricket</Nav.Link>
                    <Nav.Link href="#">Arcade</Nav.Link>
                    <Nav.Link href="#">Racing</Nav.Link>
                    <Nav.Link href="#">Adventure</Nav.Link>
                    <Nav.Link href="#">Girls</Nav.Link>
                    <Nav.Link href="#">Boys</Nav.Link>
                    <Nav.Link href="#">Hot</Nav.Link>
                    <Nav.Link href="#">More</Nav.Link>
                </Nav>
            </Navbar>

            {/* Sponsored section */}
            <Container className="mb-3">
                <Row>
                    <Col className="bg-light p-5 text-center">PUT YOUR ADS HERE SPONSORED</Col>
                </Row>
            </Container>
            {playGame &&
                <>
                    <iframe title="Desert Champion" id="gameframe" allowfullscreen="" data-hj-allow-iframe="" scrolling="no" src="https://games.atmegame.com/games/desert-champion/" style={{ width: "1766px", height: "90vh", "borderWidth": "0px" }}></iframe>
                    <button onClick={() => setPlayGame(false)} style={{ width: "500px", height: "200px", backgroundColor: "red", color: "white", fontSize: "40px" }}>
                        CLOSE GAME
                    </button>
                </>
            }
            {/* New Games section */}
            {!playGame && <Container>
                <h4>New Games</h4>
                <Row>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4">
                        <Card>
                            {/* <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" /> */}
                            <Card.Body>
                                <Card.Title>PUT YOUR SPONSORED AD HERE</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4">
                        <Card>
                            {/* <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" /> */}
                            <Card.Body>
                                <Card.Title>PUT YOUR SPONSORED AD HERE</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>                <Row>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4" onClick={() => setPlayGame(true)}>
                        <Card>
                            <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" />
                            <Card.Body>
                                <Card.Title>Desert Champion</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="mb-4">
                        <Card>
                            {/* <Card.Img variant="top" src="https://slides.atmegame.com/slide/6577_slide.jpg" /> */}
                            <Card.Body>
                                <Card.Title>PUT YOUR SPONSORED AD HERE</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>}
        </Container>
    );
}

export default HomePage;
