import * as R from 'ramda';

export const postfixActions = R.curry((postfixes, base) => R.map(R.concat(`${base}_`), postfixes));
