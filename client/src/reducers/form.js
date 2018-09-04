import { createReducer } from 'utils/reducers/create-reducer';
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
  [ActionTypeForm.UPDATE_FIELD]: (state, action) => ({
    ...state,
    formData: {
      ...state.formData,
      [action.payload.fieldName]: action.payload.value,
    },
  }),
});
