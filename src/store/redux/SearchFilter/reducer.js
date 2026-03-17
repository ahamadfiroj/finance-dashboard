import { DEFAULT_DATE_RANGE } from "../../../Pages/Dashboard/Dashbard.constant";
import {
  SET_DATE_RANGE,
  SET_SEARCH_TEXT,
  SET_SELECTED_PROJECT,
  SET_SELECTED_STATUS,
} from "./type";

const initialState = {
  selectedProject: "all",
  dateRange: DEFAULT_DATE_RANGE,
  selectedStatus: "all",
  searchText: "",
};

const searchFilterReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_SELECTED_PROJECT:
      return { ...state, selectedProject: action.payload };
    case SET_DATE_RANGE:
      return { ...state, dateRange: action.payload };
    case SET_SELECTED_STATUS:
      return { ...state, selectedStatus: action.payload };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

export default searchFilterReducer;
