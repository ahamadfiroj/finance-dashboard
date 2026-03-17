// import {
//   SET_SEARCH_TEXT,
//   SET_SELECTED_DATE_RANGE,
//   SET_SELECTED_PROJECT,
//   SET_SELECTED_STATUS,
// } from "../../store/redux/SearchFilter/type";

// const initialState = {
//   selectedProject: null,
//   selectedDateRange: null,
//   selectedStatus: null,
//   searchText: "",
// };

// const dashboardReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_SELECTED_PROJECT:
//       return { ...state, selectedProject: action.payload };
//     case SET_SELECTED_DATE_RANGE:
//       return { ...state, selectedDateRange: action.payload };
//     case SET_SELECTED_STATUS:
//       return { ...state, selectedStatus: action.payload };
//     case SET_SEARCH_TEXT:
//       return { ...state, searchText: action.payload };
//     default:
//       return state;
//   }
// };

// export default dashboardReducer;
