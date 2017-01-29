import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { reducers } from "./ducks";

export default function configureStore( initialState ) {
  const loggerMiddleware = createLogger( );
  const rootReducer = combineReducers( reducers );
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  );
}
