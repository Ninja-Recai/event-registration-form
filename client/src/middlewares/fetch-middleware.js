export const fetchMiddleware = store => next => async (action) => {
  const result = next(action);
  if (
    action.meta
    && action.meta.fetch
    && action.meta.fetch.pathname
    && action.meta.fetch.type === 'SINGLE'
  ) {
    store.dispatch({
      type: `${action.type}_FETCH`,
    });
    try {
      const hasBody = () => {
        if (action.meta.fetch.method !== 'GET' && action.payload) {
          return JSON.stringify(action.payload);
        }
        return null;
      };

      const response = await fetch(action.meta.fetch.pathname, {
        body: hasBody(),
        method: action.meta.fetch.method,
        headers: {
          'content-type': action.meta.fetch.contentType ? action.meta.fetch.contentType : 'application/json',
        },
      });

      const payload = await response.text();
      const payloadParsed = JSON.parse(payload);
      if (payloadParsed.error !== false) {
        store.dispatch({
          type: `${action.type}_FETCHED`,
          payload: payloadParsed,
        });
      } else {
        store.dispatch({
          type: `${action.type}_FETCHED`, payload: { payloadParsed }, error: true,
        });
      }
    } catch (err) {
      store.dispatch({
        type: `${action.type}_FETCHED`, payload: { err }, error: true,
      });
    }
    store.dispatch({
      type: `${action.type}_FINISHED`,
    });
  }
  return result;
};
