
import React from 'react';

import { Container, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { getSelectedCheckboxValues} from './core.js';



const EtIDSelection= () => (
 <Container fluid >
 <Row className="justify-content-md-center">
   <Col>
       <h3 class="text-center">Blockchain Explorer</h3>
       <p class="text-center">
Please select the Blockchain Explorer you wish you beneficiaries to use. It is recommended that you pick a Blockchain Explorer as it helps reiterate concepts described in the Intro text before moving Ether or Ethereum based assets.
       </p>
       </Col>
 </Row>

 <Row>


 <Col>
<div class="d-flex justify-content-center">
<ToggleButtonGroup type='checkbox' name='BlockChainExplorer'>
<ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/etherscan.txt' >Etherscan</ToggleButton>
<ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/ethvm.txt' >EthVM</ToggleButton>
</ToggleButtonGroup>
</div>
     </Col>
   </Row>


     <br />
   <Row className="justify-content-md-center">
     <Col>
         <h3 class="text-center">On Ramp/ Off Ramp</h3>
         <p class="text-center">
Please select your chosen On-Ramp/ Off-Ramp for your beneficiaries to transfer your Ether and Ethereum based tokens to their local currency.
         </p>
     </Col>
   </Row>


 <Row>
   <Col>
  <div class="d-flex justify-content-center">
  <ToggleButtonGroup type='checkbox' name='On Ramp/ Off Ramp'>
  <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/coinbase.txt' >Coinbase</ToggleButton>
  <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/uphold.txt' >Uphold</ToggleButton>

   </ToggleButtonGroup>
  </div>
       </Col>
     </Row>


     <br />
    <Row className="justify-content-md-center">
     <Col>
         <h3 class="text-center">Wallet and DApp Gateway</h3>
         <p class="text-center">
Please select a Wallet and Dapp gateway you wish your beneficiaries to use throughout this process. Note: This Wallet and Dapp Gateway must be compatible with the rest of the DApps and Services you have selected.
         </p>
     </Col>
    </Row>


    <Row>
    <Col>
    <div class="d-flex justify-content-center">
    <ToggleButtonGroup type='checkbox' name='Wallet and DApp Gateway'>
    <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/metamask.txt' >MetaMask</ToggleButton>

    </ToggleButtonGroup>
    </div>
       </Col>
     </Row>

     <br />
    <Row className="justify-content-md-center">
     <Col>
         <h3 class="text-center">Alternate Wallets</h3>
         <p class="text-center">
Please select a an Alternate Wallet you wish your beneficiaries to access.
         </p>
     </Col>
    </Row>


    <Row>
    <Col>
    <div class="d-flex justify-content-center">
    <ToggleButtonGroup type='checkbox' name='Alternate Wallets'>
    <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/ledger.txt' disabled>Coming Soon</ToggleButton>

    </ToggleButtonGroup>
    </div>
       </Col>
     </Row>

     <br />
    <Row className="justify-content-md-center">
     <Col>
         <h3 class="text-center">DApps and Services</h3>
         <p class="text-center">
Please select the DApps and Services your beneficiaries will need to interact with in order to retrieve your Ether and Ethereum based tokens.
         </p>
     </Col>
    </Row>


    <Row>
    <Col>
    <div class="d-flex justify-content-center">
    <ToggleButtonGroup type='checkbox' name='DApps and Services'>
    <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/compound.txt' >Compound</ToggleButton>
    <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/pooltogether.txt' >PoolTogether</ToggleButton>
    <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/easystaking.txt' >Easy Staking</ToggleButton>

    </ToggleButtonGroup>
    </div>
       </Col>
     </Row>

     <br />
    <Row className="justify-content-md-center">
     <Col>
         <h3 class="text-center">Exchanges</h3>
         <p class="text-center">
         Please select your chosen Exchanges for your beneficiaries  to use in order to transfer your Ethereum based tokens to Ether. Within this section there is a “Note for the Author” where you will need to follow the instructions. in order for as many of the tokens to be retrieved as possible.
         </p>
     </Col>
    </Row>


    <Row>
    <Col>
    <div class="d-flex justify-content-center">
    <ToggleButtonGroup type='checkbox' name='Exchanges'>
    <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/uniswap.txt' >Uniswap</ToggleButton>

    </ToggleButtonGroup>
    </div>
       </Col>
     </Row>

       </Container>
);


export default EtIDSelection;
