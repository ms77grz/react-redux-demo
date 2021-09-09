import { BUY_BISCUIT } from './biscuitTypes';

const initialState = {
  numOfBiscuits: 50,
};

const biscuitReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BISCUIT:
      return {
        ...state,
        numOfBiscuits: state.numOfBiscuits - 1,
      };
    default:
      return state;
  }
};

export default biscuitReducer;
