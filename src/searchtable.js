
import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


const { SearchBar, ClearSearchButton } = Search;

const linkFormatterA = (cell, row, rowIndex) => {
  return (
    <a href={cell} target="_blank" rel="noopener noreferrer">
      Website/ DApp Link
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
        'name': 'Etherscan',
        'category': 'Blockchain Explorers',
        dapplink: 'https://etherscan.io/',
        flink:'/DappData/etherscan.txt'

      },
      {
        id: 2,
        'name': 'Coinbase',
        'category': 'On Ramps/ Off Ramps',
        dapplink: 'https://www.coinbase.com/',
        flink : '/DappData/coinbase.txt'
      },
      {
        id: 3,
        'name': 'Metamask',
        'category': 'Wallet and DApp Gateways',
        dapplink: 'https://metamask.io/',
        flink : '/DappData/metamask.txt'
      },
      {
        id: 4,
        'name': 'Introduction Text',
        'category': 'Intro',
        dapplink: 'https://eth-ter-i-die.rip/',
        flink : '/BaseData/intro.txt'
      },
      {
        id: 5,
        'name': 'End Text',
        'category': 'End',
        dapplink: 'https://eth-ter-i-die.rip/',
        flink : '/BaseData/end.txt'
      },
      {
        id: 6,
        'name': 'Uniswap',
        'category': 'Exchanges',
        dapplink: 'https://uniswap.org/',
        flink : '/DappData/uniswap.txt'
      },
      {
        id: 7,
        'name': 'Compound',
        'category': 'DApps and Services',
        dapplink: 'https://compound.finance/',
        flink : '/DappData/compound.txt'
      },
      {
        id: 8,
        'name': 'EthVM',
        'category': 'Blockchain Explorers',
        dapplink: 'https://www.ethvm.com/',
        flink : '/DappData/ethvm.txt'
      },
      {
        id: 9,
        'name': 'PoolTogether',
        'category': 'DApps and Services',
        dapplink: 'https://www.pooltogether.com/',
        flink : '/DappData/pooltogether.txt'
      },
      {
        id: 10,
        'name': 'Uphold',
        'category': 'On Ramps/ Off Ramps',
        dapplink: 'https://www.uphold.com/',
        flink : '/DappData/uphold.txt'
      },
      {
        id: 11,
        'name': 'Easy Staking',
        'category': 'DApps and Services',
        dapplink: 'https://easy-staking.xdaichain.com/',
        flink : '/DappData/easystaking.txt'
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
    text: 'Website/ DApp Link',
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
