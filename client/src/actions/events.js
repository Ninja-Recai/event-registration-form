import { ActionType } from 'actions/constants';

export const addEvent = payload => ({
  type: ActionType.ADD_EVENT,
  payload,
  meta: {
    fetch: {
      pathname: '/events/addEvent',
      type: 'SINGLE',
      method: 'POST',
    },
  },
});
