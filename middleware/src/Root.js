import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';


import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';


export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    // the async middleware was created keeping in mind
    // that it wouldn't matter where in the chain/order
    // of middleware that it needs to go
    applyMiddleware(async, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};
