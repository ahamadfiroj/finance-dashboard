import {
  CLOSE_INVOICE_DRAWER,
  OPEN_INVOICE_DRAWER,
  SET_CURRENT_PAGE,
  SET_LOADING,
  SET_SORT_CONFIG,
} from "./type";

const initialState = {
  selectedInvoice: null,
  isDrawerOpen: false,
  sortConfig: {
    key: "dueDate",
    direction: "asc",
  },
  currentPage: 1,
  isLoading: true,
};

const invoiceTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INVOICE_DRAWER:
      return {
        ...state,
        selectedInvoice: action.payload,
        isDrawerOpen: true,
      };
    case CLOSE_INVOICE_DRAWER:
      return {
        ...state,
        selectedInvoice: null,
        isDrawerOpen: false,
      };
    case SET_SORT_CONFIG:
      return {
        ...state,
        sortConfig: action.payload,
        currentPage: 1,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default invoiceTableReducer;
