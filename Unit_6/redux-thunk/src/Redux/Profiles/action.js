import { updatePage } from "../Page/action";
import { UPDATE_PROFILES } from "./actionType";

export const updateProfiles = (payload) => ({
  type: UPDATE_PROFILES,
  payload
});

export const getAllProfiles = (query, page) => async (dispatch) => {
  try {
    // console.log(query, page);
    let res = await fetch(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`
    );
    let data = await res.json();
    // console.log(data);
    dispatch(updateProfiles(data.items));
    dispatch(updatePage(data.total_count));
  } catch (error) {
    console.log(error);
  }
};

// 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
// "user_url": "https://api.github.com/users/{user}",
// "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
