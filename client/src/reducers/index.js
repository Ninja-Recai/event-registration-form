import { combineReducers } from 'redux';
import { events } from 'reducers/events';
import { form } from 'reducers/form';

export const rootReducer = combineReducers({
  events,
  form,
});
