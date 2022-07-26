import { TOOGLE_AUTH } from "./actionType";

const authReducer = (store = { isAuth: false }, { type, payload }) => {
  switch (type) {
    case TOOGLE_AUTH: {
      return {
        ...store,
        isAuth: !store.isAuth
      };
    }
    default: {
      return store;
    }
  }
};

export { authReducer };
