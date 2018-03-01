import React from 'react';
import {connect} from 'react-redux';
import {
  getBlocks,
  selectBlock,
} from '../actions';
import {Header} from './Header';
import {BlockList} from './BlockList';
import {TransactionList} from './TransactionList';

export function App(props) {
  return (
    <div>
      <Header {...props} />
      <BlockList {...props} />
      <TransactionList {...props} />
    </div>
  );
}

function mapState(state) {
  return {
    blocks: state.blocks.blocks,
    latestBlock: state.blocks.latestBlock,
    loading: state.blocks.loading,
    selectedBlock: state.blocks.selectedBlock
  };
}

function mapDispatch(dispatch) {
  return {
    getBlocks: () => dispatch(getBlocks()),
    selectBlock: (block) => dispatch(selectBlock(block)),
  }
}

export default connect(mapState, mapDispatch)(App);