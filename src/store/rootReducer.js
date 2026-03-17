import { combineReducers } from "redux";
import searchFilterReducer from "../store/redux/SearchFilter/reducer";
import invoiceTableReducer from "../store/redux/InvoiceTable/reducer";

const rootReducer = combineReducers({
  searchFilter: searchFilterReducer,
  invoiceTable: invoiceTableReducer,
});

export default rootReducer;
