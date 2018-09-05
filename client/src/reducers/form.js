import * as R from 'ramda';
import { createReducer } from 'zeal-redux-utils';
import { ActionTypeForm } from 'actions/constants';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
  },
};

export const form = createReducer(initialState, {
  [ActionTypeForm.UPDATE_FIELD]: (state, action) =>
    R.assocPath(['formData', action.payload.fieldName], action.payload.value, state),
});
