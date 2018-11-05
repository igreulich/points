/* eslint-disable no-undef */
import { selectItem, resetGame, reducer } from '../scripts/reducers/game';

describe('reducer', () => {
  describe('initialState', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const expectedState = { selectedItems: [], totalPoints: 0 };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('SELECT_ITEM', () => {
    test('returns the correct state', () => {
      const action = { type: selectItem, payload: 1 };
      const expectedState = { selectedItems: [1], totalPoints: 0 };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('RESET_GAME', () => {
    test('returns the correct state', () => {
      const action = { type: resetGame, payload: undefined };
      const expectedState = { selectedItems: [], totalPoints: 0 };

      reducer(undefined, { type: selectItem, payload: 1 });
      reducer(undefined, { type: selectItem, payload: 1 });

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
/* eslint-enable no-undef */
