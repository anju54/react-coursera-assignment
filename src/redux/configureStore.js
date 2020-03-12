import { createStore, combineReducers } from "redux";
import {DISHES} from './dishes';
import {PROMOTIONS} from './promotions';
import {COMMENTS} from './comments';
import {LEADERS} from './leaders';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
        dishes : DISHES,
        comments : COMMENTS,
        promotions : PROMOTIONS,
        leaders : LEADERS
    })
  );

  return store;
};