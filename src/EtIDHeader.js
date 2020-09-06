import React from 'react';

import { Accordion, Container, Card, Row, Col, Image} from 'react-bootstrap'

import { NavLink } from "react-router-dom";

import logo from './logoxs.svg';



  //check if need to justufy content below!
const EtIDHeader = () => (
<Container fluid >

  <Row className="justify-content-md-center">
  <Col>
<Image width="180" className="rounded mx-auto d-block" src={logo} alt="Logo" />

    </Col>
  </Row>

  <Row className="justify-content-md-center">
    <Col>
        <h1 class="text-center">Eth-ter-I-Die</h1>
        <p class="text-center">
        Don’t let your Ethereum assets be lost to the blockchain when you die.
        </p>
        <p class="text-center">
Eth-ter-I-Die produces instructions for your non-technical beneficiary to convert your Ethereum  Tokens, from a variety of different DApps, to Ether and transfer that Ether to your beneficiaries local currency. Once completing your selection of DApps and services a .txt file is generated that allows you to edit, print and then hand write the private details required for your beneficiaries to access your address/ wallets. This document should be kept as safe as your seed phrase as it is a literal "how to guide" on accessing all of your Ethereum based assets. 
        </p>
<p class="text-center">
Additional options/ selections coming soon, please send suggestions to me on <a href="https://twitter.com/lu_calm" target="_blank" rel="noopener noreferrer">
  my Twitter
</a>.
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
      <Card.Body>
<p>

      Select the DApps and services below that you use, Eth-ter-I-Die generates a .txt file to download with a basic introduction to Ethereum and removal instructions for you to print. Read the document carefully to confirm the instructions are correct and add in any additional comments.
</p>
<p>
      All private and preference fields are left blank (i.e. __________ ) for you to <kbd>hand write</kbd> once the document is printed.
</p>
<p>
<kbd>For your security reasons, DO NOT type in this information and save the document to your computer.</kbd>
</p>
<p>
      From here you need to make sure that document is kept as secure as possible. It is a literal “How to Guide” of removing your Ethereum assets, you do not want it in the wrong hands.
</p>

<p>
For further advice on how best to use Eth-ter-I-Die, check out the <NavLink to="/about">About section</NavLink>
</p>
</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>
      </Col>
      </Row>
</Container>
);

  export default EtIDHeader;
