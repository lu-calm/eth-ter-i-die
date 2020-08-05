import React, { Component } from "react";

import SearchTable from './searchtable.js';


class TextFiles extends Component {
  render() {
    return (

      <div>
        <h2>Text Files</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>

        <SearchTable />

      </div>
    );
  }
}

export default TextFiles;
