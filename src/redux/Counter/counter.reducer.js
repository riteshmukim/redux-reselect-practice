import { INCREMENT, DECREMENT } from './counter.types';

const INITIAL_STATE = {
  count: 0,
  data: {
    principalAmount: 2000,
    bonusPercentage: 10,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default reducer;
