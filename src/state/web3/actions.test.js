/* global test, expect */
import * as types from './types'
import * as actions from './actions'

test('should create an action to update web3 status', () => {
  const expectedAction = {
    type: types.UPDATE_WEB3_STATUS,
    payload: {}
  }
  expect(actions.updateWeb3Status({})).toEqual(expectedAction)

  const expectedNoConnectionAction = {
    type: types.UPDATE_WEB3_STATUS,
    payload: null
  }
  expect(actions.updateWeb3Status(null)).toEqual(expectedNoConnectionAction)
})
