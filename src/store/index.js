import orderReducer from "../slices/order";
import routesReducer from "../slices/routes";
import routesSearchFormReducer from "../slices/routesSearchForm";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    order: orderReducer,
    routes: routesReducer,
    routesSearchForm: routesSearchFormReducer,
  },
});

export default store;
