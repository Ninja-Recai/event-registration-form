import { zipObj } from 'ramda';

export const actionCreatorsFactory = (actions) => {
  const actionCreatorsFunctions = Object.values(actions)
    .map(action => payload => ({ type: action, payload }));
  const actionCreatorsKeys = Object.keys(actions);
  return zipObj(actionCreatorsKeys, actionCreatorsFunctions);
};
