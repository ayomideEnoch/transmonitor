/* global web3 */
import React from 'react';
import Web3 from 'web3';
import {Table} from 'reactstrap';

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

export function TransactionList(props) {
  if (props.blocks.length === 0 || !props.selectedBlock) return null;
  let idx = props.blocks.findIndex(block => block.number ===  props.selectedBlock);
  if (props.selectedBlockidx === -1) return null;
  let sortedBlocks = props.blocks.sort((a, b) => b.number - a.number);
  return (<div id="transactions">
    <h3>Selected Block #{props.selectedBlock}</h3>
    <Table>
      <thead>
        <tr>
          <th>hash #</th>
          <th>from</th>
          <th>to</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
      {sortedBlocks[idx].valueTransactions.map(transaction => <Transaction {...transaction} key={transaction.hash} />)}
      </tbody>
    </Table>
  </div>);
}

function format(text) {
  return `${text.substring(0, 17)}...`;
}

function Transaction(transaction) {
  return (<tr>
    <th><a href={`https://etherscan.io/tx/${transaction.hash}`} target="_blank">{format(transaction.hash)}</a></th>
    <th><a href={`https://etherscan.io/address/${transaction.from}`} target="_blank">{format(transaction.from)}</a></th>
    <th><a href={`https://etherscan.io/address/${transaction.to}`} target="_blank">{format(transaction.to)}</a></th>
    <th>{web3.fromWei(transaction.value, 'ether').toString()} Ether</th>
  </tr>);
}

export default TransactionList;
