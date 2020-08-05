import React, { Component } from "react";

import EtIDSelection from './EtIDSelection.js';
import EtIDDownload from './EtIDDownload.js';
import EtIDHeader from './EtIDHeader.js';
import EtIDAdvSet from './EtIDAdvSet.js';

class Home extends Component {
  render() {
    return (
<>
      <EtIDHeader />
      <br />
      <EtIDSelection />
      <br />
      <EtIDDownload />
      <br />
      <EtIDAdvSet/>
      </>
    );
  }
}

export default Home;
