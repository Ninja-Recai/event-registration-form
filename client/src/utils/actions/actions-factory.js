import { zipObj } from 'ramda';

export const actionsFactory = (prefix, actions) => zipObj(actions, actions.map(action => `@@${prefix}/${action}`));
