import { ActionTypeForm } from 'actions/constants';

export const updateField = payload => ({
  type: ActionTypeForm.UPDATE_FIELD,
  payload,
});
