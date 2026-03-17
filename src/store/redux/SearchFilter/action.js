import {
  SET_DATE_RANGE,
  SET_SEARCH_TEXT,
  SET_SELECTED_PROJECT,
  SET_SELECTED_STATUS,
} from "./type";

export const setSelectedProject = (payload) => ({
  type: SET_SELECTED_PROJECT,
  payload,
});

export const setDateRange = (payload) => ({
  type: SET_DATE_RANGE,
  payload,
});

export const setSelectedStatus = (payload) => ({
  type: SET_SELECTED_STATUS,
  payload,
});

export const setSearchText = (payload) => ({
  type: SET_SEARCH_TEXT,
  payload,
});
