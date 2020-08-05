import React from 'react';

import { introAndEndData } from './core.js';

import EtIDNav from './EtIDNav.js';

import EtIDFooter from './EtIDFooter.js';

window.onload = function() {
  introAndEndData();
};

const App = () => (
    <>

    <EtIDNav />

    <EtIDFooter/>
   </>
    );


export default App;
