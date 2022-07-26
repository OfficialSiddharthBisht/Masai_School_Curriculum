import { legacy_createStore as createStore } from "redux";
import { loginReducer } from "./Login/reducer";

const store = createStore(loginReducer);

export { store }