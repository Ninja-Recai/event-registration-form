import { createActionTypes } from 'zeal-redux-utils';
import { postfixActions } from 'utils/actions/postfix-actions';

const fetchActions = postfixActions(['FETCH', 'FETCHED', 'FINISHED']);

export const ActionType = createActionTypes('events', [
  'ADD_EVENT',
  ...fetchActions('ADD_EVENT'),
]);

export const ActionTypeForm = createActionTypes('form', [
  'UPDATE_FIELD',
]);
