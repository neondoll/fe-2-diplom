import chosenRouteReducer from "../slices/chosenRoute";
import chosenSeatsReducer from "../slices/chosenSeats";
import orderReducer from "../slices/order";
import routesSearchReducer from "../slices/routesSearch";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    chosenRoute: chosenRouteReducer,
    chosenSeats: chosenSeatsReducer,
    order: orderReducer,
    routesSearch: routesSearchReducer,
  },
});

export default store;
