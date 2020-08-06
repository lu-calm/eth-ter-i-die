
import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


const { SearchBar, ClearSearchButton } = Search;

const linkFormatterA = (cell, row, rowIndex) => {
  return (
    <a href={cell} target="_blank" rel="noopener noreferrer">
      DApp Website Link
    </a>
  );
};

const linkFormatterB = (cell, row, rowIndex) => {
  return (
    <a href={cell} target="_blank" rel="noopener noreferrer">
      Link to File
    </a>
  );
};


const products = [
      {
        id: 1,
        'name': 'MetaMask',
        'category': 'Wallet',
        dapplink: 'https://metamask.io/',
        flink:'/DappData/metamask.txt'

      },
      {
        id: 2,
        'name': 'CoinBase',
        'category': 'Off Ramp',
        dapplink: 'https://metamask.io/',
        flink : '/DappData/metamask.txt'
      },
      {
        id: 3,
        'name': 'Uniswap',
        'category': 'Exchange',
        dapplink: 'https://metamask.io/',
        flink : '/DappData/metamask.txt'
      },
      {
        id: 4,
        'name': 'Ledger',
        'category': 'Wallet',
        dapplink: 'https://shop.ledger.com/',
        flink : '/DappData/ledger.txt'
      },
    ]

    const columns = [{
      dataField: 'id',
      text: 'Product ID',
      hidden: true
    }, {
      dataField: 'name',
      text: 'Product Name',
       sort: true
    }, {
      dataField: 'category',
      text: 'Category',
       sort: true
    }, {
    dataField: 'dapplink',
    text: "Dapp Link",
    formatter: linkFormatterA
  },  {
    dataField: "flink",
    text: "File Link",
    formatter: linkFormatterB
  }
];




    const options = {
            pageStartIndex: 1,
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            sizePerPageList: [{
              text: '5', value: 5
            }, {
              text: '10', value: 10
            }, {
              text: '25', value: 25
              }]
          };

const SearchTable= () => (

<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search

>
  {
    props => (
      <div>
        <SearchBar { ...props.searchProps } />
        <ClearSearchButton { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
          bootstrap4
          striped
          hover
          pagination={ paginationFactory(options) }
        />
      </div>
    )
  }
</ToolkitProvider>


);
  export default SearchTable;
