import { createReducer } from 'utils/reducers/create-reducer';
import { ActionType } from 'actions/constants';
import * as R from 'ramda';

const initialState = {
  isFetching: false,
  isFetched: false,
  errorMessage: '',
  successMessage: '',
  fetchReply: {},
};

export const events = createReducer(initialState, {
  [ActionType.ADD_EVENT_FETCH]: state => R.assoc('isFetching', true, state),
  [ActionType.ADD_EVENT_FETCHED]: (state, action) => {
    if (action.payload.error) {
      return R.merge(state, {
        fetchReply: action.payload,
        errorMessage: action.payload.message,
        successMessage: '',
        isFetching: false,
        isFetched: false,
      });
    }
    return R.merge(state, {
      fetchReply: action.payload,
      isFetching: false,
      isFetched: true,
      successMessage: action.payload.message,
      errorMessage: '',
    });
  },
  [ActionType.ADD_EVENT_FINISHED]: state => ({
    ...state,
    isFetched: false,
  }),
});
