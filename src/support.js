import React, { Component } from "react";
import { Container, Card, Accordion } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';


class Support extends Component {
  render() {
    return (
      <Container>
        <h2>Support Eth-ter-I-Die</h2>
        <Accordion>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Donation
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

            <p class="text-center">
I strongly believe Eth-ter-I-Die should be a free service for all of the Ethereum community to benefit from. However there are costs associated in keeping it running and improving.
          </p>

          <p class="text-center">
If you are happy with this service and want to support future features, a donation would be greatly appreciated. Thank you
          {'  '} <span aria-label="Beaming Smiley Face" role="img">&#128522;</span>

  </p>
<p class="text-center">
Donation Address: 0xa28910bcbe9a1b9119940343c02cae65c1b22cc5
</p>

<p class="text-center">
<a href="https://etherscan.io/address/0xa28910bcbe9a1b9119940343c02cae65c1b22cc5" target="_blank" rel="noopener noreferrer">
  View on Etherscan
</a>
          </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>



        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        Development
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
        <p class="text-center">
Bear with me, I have a full time job but I do I work on Eth-ter-I-Die as and when I can.
  </p>

  <p class="text-center">
I will keep adding new DApps, services and features for the betterment for it to be more useful for more people.
</p>

<p class="text-center">
I am quite new to coding so it is a bit of a learning curve! If you would like to help improve the shambles of code I have written, here is the GitHub account.
</p>
<p class="text-center">
<SocialIcon url="https://github.com/lu-calm/eth-ter-i-die" bgColor="#000000"/>
</p>

  <p class="text-center">
You can witness my struggles of the development process on my YouTube channel.  </p>
<p class="text-center">
  <SocialIcon url="https://www.youtube.com/channel/UC9GTIw90lZei5mUfjmTf7fg" bgColor="#000000"/>



        </p>
          </Card.Body>
        </Accordion.Collapse>
        </Card>


        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
        Feedback and Suggestions (including new DApp requests)
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
        <p class="text-center">
        If you have some feedback or suggestions for Eth-ter-I-Die, please contact me via <a href="https://twitter.com/lu_calm" target="_blank" rel="noopener noreferrer">
          my Twitter
        </a>.
        </p>
        <p class="text-center">
        Also let me know, via twitter, if you have any requests for new DApps or services to be added to Eth-ter-I-Die. I will try my best to add them ASAP!
      </p>
      <p class="text-center">

      Anyway, cheers for reading all of this, I hope you have a great day.
      </p>

      <p class="text-center">
      <SocialIcon url="https://twitter.com/lu_calm" bgColor="#000000"/>
              </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>
</Container>








    );
  }
}

export default Support;
