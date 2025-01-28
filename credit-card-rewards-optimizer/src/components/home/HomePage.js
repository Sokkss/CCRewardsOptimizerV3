import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function HomePage() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={6} sm={6}>
          <Image
            src="/img/logo.png"
            alt="Credit Card Rewards Optimizer"
            fluid
          />
        </Col>
        <Col sm={6}>
          <h1 className="display-1">Credit Card Rewards Optimizer</h1>
          <p className="lead">
            Compare credit card rewards programs and find the best card for your
            spending habits.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
