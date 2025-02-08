import chosenCoachReducer from "../slices/chosenCoach";
import chosenRouteReducer from "../slices/chosenRoute";
import orderReducer from "../slices/order";
import routesSearchReducer from "../slices/routesSearch";
import successfulOrderInfoReducer from "../slices/successfulOrderInfo";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    chosenCoach: chosenCoachReducer,
    chosenRoute: chosenRouteReducer,
    order: orderReducer,
    routesSearch: routesSearchReducer,
    successfulOrderInfo: successfulOrderInfoReducer,
  },
});

export default store;
