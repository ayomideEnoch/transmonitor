import {
  GET_BLOCK,
  QUICKLY_GET_BLOCK,
  SAVE_BLOCK,
  SELECT_BLOCK,
  WATCH_BLOCKS,
  UPDATE_BLOCK
} from './types'

/**
 * Create an action to get latest blocks.
 */
export function watchBlocks () {
  return {
    type: WATCH_BLOCKS
  }
}

/**
 * Create an action to get latest block.
 */
export function quicklyGetBlock () {
  return {
    type: QUICKLY_GET_BLOCK
  }
}

/**
 * Create an action to get specified block via block number.
 * @param {number} payload
 */
export function getBlock (payload) {
  return {
    type: GET_BLOCK,
    payload
  }
}

/**
 * Process and save the block data to store.
 * @param {Object} payload
 */
export function saveBlock (payload) {
  return {
    type: SAVE_BLOCK,
    payload
  }
}

/**
 * Process and update the block data.
 * @param {Object} payload
 */
export function updateBlock (payload) {
  return {
    type: UPDATE_BLOCK,
    payload
  }
}

/**
 * Select block data from store.
 * @param {number} payload
 */
export function selectBlock (payload) {
  return {
    type: SELECT_BLOCK,
    payload
  }
}
