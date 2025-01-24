import orderReducer from "../slices/order";
import routesReducer from "../slices/routes";
import routesSearchReducer from "../slices/routesSearch";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    order: orderReducer,
    routes: routesReducer,
    routesSearch: routesSearchReducer,
  },
});

export default store;
