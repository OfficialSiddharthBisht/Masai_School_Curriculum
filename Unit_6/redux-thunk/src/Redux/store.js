import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { pageReducer } from "./Page/reducer";
import { profilesReducer } from "./Profiles/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profiles: profilesReducer,
  page: pageReducer
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(rootReducer, applyMiddleware(thunk));
