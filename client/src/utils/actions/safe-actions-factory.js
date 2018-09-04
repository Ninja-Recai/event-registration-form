import { actionsFactory } from './actions-factory';

const safeGetHandler = {
  get(target, prop) {
    if (target[prop]) {
      return target[prop];
    }
    throw new Error(`You are trying to access a non existing action: ${prop}.\nAvailable actions: [${Object.keys(target)}]`);
  },
};

/* eslint-disable max-len */
export const safeActionsFactory = (prefix, actions) => new Proxy(actionsFactory(prefix, actions), safeGetHandler);
