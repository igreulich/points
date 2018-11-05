/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';

// Actions to be tested
import { selectItem, resetGame } from '../scripts/reducers/game';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('selectItem', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: 'SELECT_ITEM',
          payload: 1,
        },
      ];

      store.dispatch(selectItem(1));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('resetGame', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: 'RESET_GAME',
          payload: 1,
        },
      ];

      store.dispatch(resetGame(1));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
/* eslint-enable no-undef */
