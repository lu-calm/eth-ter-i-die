import React from 'react';

import { Accordion, Container, Card, Row, Col, Toast, Image } from 'react-bootstrap'


  //check if need to justufy content below!
const EtIDHeader = () => (
<Container fluid >

  <Row className="justify-content-md-center">
  <Col>
<Image width="180" className="rounded mx-auto d-block" src="logoxs.svg" />

    </Col>
  </Row>

  <Row className="justify-content-md-center">
    <Col>
        <h1 class="text-center">Eth-ter-I-Die</h1>
        <p class="text-center">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>

    </Col>
  </Row>

      <Row>
      <Col>
      <Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    Instructions
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>
      </Col>
      </Row>
</Container>
);

  export default EtIDHeader;
