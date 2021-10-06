import { configureStore } from '@reduxjs/toolkit';
import sagaMiddleware from './middleware/saga';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

const middleware = [sagaMiddleware];

export const store = configureStore({ reducer: createRootReducer, middleware });

sagaMiddleware.run(rootSaga);
