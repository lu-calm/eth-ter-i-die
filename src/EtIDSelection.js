
import React from 'react';

import { Container, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { getSelectedCheckboxValues} from './core.js';



const EtIDSelection= () => (
 <Container fluid >
 <Row className="justify-content-md-center">
   <Col>
       <h3 class="text-center">Wallets</h3>
       <p class="text-center">
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
       </p>
   </Col>
 </Row>

 <Row>


 <Col>
<div class="d-flex justify-content-center">
<ToggleButtonGroup type='checkbox' name='Wallets'>
<ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/metamask.txt'>MetaMask</ToggleButton>


<ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/ledger.txt'>Ledger</ToggleButton>
 </ToggleButtonGroup>
</div>
     </Col>
   </Row>
     <br />
   <Row className="justify-content-md-center">
     <Col>
         <h3 class="text-center">Exchanges</h3>
         <p class="text-center">
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         </p>
     </Col>
   </Row>


 <Row>
   <Col>
  <div class="d-flex justify-content-center">
  <ToggleButtonGroup type='checkbox' name='Wallets'>
  <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/metamask.txt' disabled>OpenSea</ToggleButton>
  <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/ledger.txt' disabled>UniSwap</ToggleButton>


  <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/ledger.txt' disabled>Other</ToggleButton>
   </ToggleButtonGroup>
  </div>
       </Col>
     </Row>

<Row className="justify-content-md-center">
  <Col>
      <h3 class="text-center">Dapps</h3>
      <p class="text-center">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      </p>
  </Col>
</Row>

<Row>
<Col>
<div class="d-flex justify-content-center">

<ToggleButtonGroup type='checkbox' name='Exchanges'>
<ToggleButton variant="outline-dark" value='/DappData/ledger.txt' disabled>Compund</ToggleButton>

<ToggleButton variant="outline-dark" value='/DappData/ledger.txt' disabled>CryptoKitties</ToggleButton>

<ToggleButton variant="outline-dark" value='/DappData/ledger.txt' disabled>Pool Together</ToggleButton>

<ToggleButton variant="outline-dark" value='/DappData/ledger.txt' disabled>Maker Dao</ToggleButton>
 </ToggleButtonGroup>
 </div>

</Col>
</Row>

<Row className="justify-content-md-center">
  <Col>
      <h3 class="text-center">Block Searcher</h3>
      <p class="text-center">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      </p>
  </Col>
</Row>

<Row>
<Col>
<div class="d-flex justify-content-center">

<ToggleButtonGroup type='checkbox' name='Exchanges'>
<ToggleButton variant="outline-dark" value='/DappData/ledger.txt' disabled>EtherScan</ToggleButton>
 </ToggleButtonGroup>
</div>
</Col>
</Row>

       </Container>
);


export default EtIDSelection;
