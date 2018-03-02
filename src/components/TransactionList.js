import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import {ethWeb3} from '../web3connection';

export function TransactionList(props) {
  if (props.blocks.length === 0 || !props.selectedBlock) return null;
  let sortedBlocks = props.blocks.sort((a, b) => b.number - a.number);
  let idx = sortedBlocks.findIndex(block => block.number ===  props.selectedBlock);
  if (idx === -1) return null;
  return (<div id="transactions">
    <h3>Block #{props.selectedBlock}</h3>
    <h5>{sortedBlocks[idx].valueTransactions.length} transactions with value</h5>
    <a href="#blocks"><span aria-hidden="true">⬆</span>Back to Blocks list</a>
    <Table striped hover responsive>
      <thead>
        <tr>
          <th>hash #</th>
          <th>from</th>
          <th>to</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
      {sortedBlocks[idx].valueTransactions.map((transaction) => <Transaction {...transaction} key={transaction.hash} />)}
      </tbody>
    </Table>
    <a href="#blocks"><span aria-hidden="true">⬆</span>Back to Blocks list</a>
  </div>);
}

function format(text) {
  return `${text.substring(0, 17)}...`;
}

function Transaction(transaction) {
  return (<tr>
    <th><a href={`https://etherscan.io/tx/${transaction.hash}`} target="_blank">{format(transaction.hash)}</a></th>
    <th>{format(transaction.from)}</th>
    <th>{format(transaction.to)}</th>
    <th>{ethWeb3.fromWei(transaction.value, 'ether').toString()} Ether</th>
  </tr>);
}

TransactionList.propTypes = {
  blocks: PropTypes.array,
  selectedBlock: PropTypes.number,
};

export default TransactionList;
