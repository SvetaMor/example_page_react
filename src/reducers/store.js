import { createStore, combineReducers, applyMiddleware } from 'redux';
import { pageReducer } from './pageReducer';
import createSagaMiddleware from 'redux-saga';
import { watchSignIn } from '../sagas/saga';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
   pageReducer: pageReducer,
   form: formReducer
})

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchSignIn);

export default store;
