import { UPDATE_PAGE } from "./actionType";

const pageReducer = (store = { page: 0 }, { type, payload }) => {
  switch (type) {
    case UPDATE_PAGE: {
      return {
        ...store,
        page: payload
      };
    }
    default: {
      return store;
    }
  }
};
export { pageReducer };
