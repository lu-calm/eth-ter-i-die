import React, { Component } from "react";

import SearchTable from './searchtable.js';


class TextFiles extends Component {
  render() {
    return (

      <div>
        <h2>The Files</h2>
        <p>Use the table below to view the text files of the DApp or service you wish to use.</p>

        <SearchTable />

      </div>
    );
  }
}

export default TextFiles;
