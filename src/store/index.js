import chosenRouteReducer from "../slices/chosenRoute";
import orderReducer from "../slices/order";
import routesSearchReducer from "../slices/routesSearch";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    chosenRoute: chosenRouteReducer,
    order: orderReducer,
    routesSearch: routesSearchReducer,
  },
});

export default store;
