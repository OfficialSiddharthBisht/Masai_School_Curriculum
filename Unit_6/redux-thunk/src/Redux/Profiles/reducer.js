import { UPDATE_PROFILES } from "./actionType";

const profilesReducer = (store = { profiles: [] }, { type, payload }) => {
  switch (type) {
    case UPDATE_PROFILES: {
      return {
        ...store,
        profiles: payload
      };
    }
    default: {
      return store;
    }
  }
};

export { profilesReducer };
