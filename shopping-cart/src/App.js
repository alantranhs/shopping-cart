import React from 'react';
import Shelf from './components/shelf'
import { createStore, applyMiddleware, compose } from 'redux';
import shoppingCartApp from './reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { shoppingCartSaga } from './saga';
import FloatCart from './components/floatCart';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  shoppingCartApp,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(shoppingCartSaga);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Shelf/>

        <FloatCart />
      </div>
    </Provider>
  );
};

export default App;
