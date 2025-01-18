import orderReducer from "../slices/order";
import ticketSearchFormReducer from "../slices/ticketSearchForm";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    order: orderReducer,
    ticketSearchForm: ticketSearchFormReducer,
  },
});

export default store;
