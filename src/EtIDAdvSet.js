import React from 'react';

import { Button, Container, Card, Row, Col, Accordion } from 'react-bootstrap'

import { introAndEndData, remvoveIntroAndEndData } from './core.js';



const EtIDAdvSet= () => (

 <Container fluid>
 <Row>
 <Col>
   <Accordion>
     <Card>
         <Accordion.Toggle as={Card.Header} eventKey="0">
           Advanced Settings
         </Accordion.Toggle>

       <Accordion.Collapse eventKey="0">
         <Card.Body>
         <br />
         <h4>Include Intro and End</h4>
         <p>
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         </p>

         <Row className="justify-content-md-center">
         <Col sm={{ span: 2, offset: 3 }} md={{offset: 2 }}  >
        <Button variant="success" type="submit" onClick={() => { introAndEndData() }}>Include Intro and End (Default)</Button>
         </Col>
         <Col sm={{ span: 2, offset: 2 }} md={{offset: 0 }} >
        <Button variant="danger" type="submit" onClick={() => { remvoveIntroAndEndData() }}>Exclude Intro and End</Button>


        </Col>
</Row>

         </Card.Body>
       </Accordion.Collapse>
     </Card>
     </Accordion>
   </Col>

   </Row>
 </Container>
 );

 export default EtIDAdvSet;
