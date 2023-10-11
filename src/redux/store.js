import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    // alert: alertReducer,
});

const _reducerName = 'ayoola_blog_reducer';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(_reducerName);
    return serializedState === null? {} : JSON.parse(serializedState);
  } catch (err){
    return {};
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem(_reducerName, serializedState);
  } catch (err){
    // Ignore write errors
  }
}

// const initialState = {};
const initialState = loadState();
const middleware = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

store.subscribe(()=>saveState(store.getState()));

export default store;
  