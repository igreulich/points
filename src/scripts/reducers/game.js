import { createAction, handleActions } from 'redux-actions';

export const selectItem = createAction('SELECT_ITEM');
export const resetGame = createAction('RESET_GAME');

const initialState = {
  selectedItems: [],
};

export const reducer = handleActions(
  {
    [selectItem]: (state, action) => ({
      ...state,
      selectedItems: [...state.selectedItems, action.payload],
    }),
    [resetGame]: state => ({ ...state, selectedItems: [] }),
  },
  initialState,
);
