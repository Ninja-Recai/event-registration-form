import { ActionTypeEvent } from 'actions/constants';

export const addEvent = payload => ({
  type: ActionTypeEvent.ADD_EVENT,
  payload,
  meta: {
    fetch: {
      pathname: '/events/addEvent',
      type: 'SINGLE',
      method: 'POST',
    },
  },
});
