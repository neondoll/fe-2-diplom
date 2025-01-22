import orderReducer from "../slices/order";
import routesReducer from "../slices/routes";
import ticketSearchFormReducer from "../slices/ticketSearchForm";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    order: orderReducer,
    routes: routesReducer,
    ticketSearchForm: ticketSearchFormReducer,
  },
});

export default store;
