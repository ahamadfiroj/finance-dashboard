import {
  CLOSE_INVOICE_DRAWER,
  OPEN_INVOICE_DRAWER,
  SET_CURRENT_PAGE,
  SET_LOADING,
  SET_SORT_CONFIG,
} from "./type";

export const openInvoiceDrawer = (payload) => ({
  type: OPEN_INVOICE_DRAWER,
  payload,
});

export const closeInvoiceDrawer = () => ({
  type: CLOSE_INVOICE_DRAWER,
});

export const setSortConfig = (payload) => ({
  type: SET_SORT_CONFIG,
  payload,
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
