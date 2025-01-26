import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrival_duration: null,
  arrival_from_city_name: null,
  arrival_from_datetime: null,
  arrival_from_railway_station_name: null,
  arrival_id: null,
  arrival_to_city_name: null,
  arrival_to_datetime: null,
  arrival_to_railway_station_name: null,
  arrival_train_name: null,
  departure_duration: null,
  departure_from_city_name: null,
  departure_from_datetime: null,
  departure_from_railway_station_name: null,
  departure_id: null,
  departure_to_city_name: null,
  departure_to_datetime: null,
  departure_to_railway_station_name: null,
  departure_train_name: null,
};

const chosenRouteSlice = createSlice({
  name: "chosenRoute",
  initialState,
  reducers: {
    clearChosenRoute: (state) => {
      Object.entries(initialState).forEach(([name, value]) => {
        state[name] = value;
      });
    },
    initChosenRoute: (state, action) => {
      Object.entries(action.payload).forEach(([name, value]) => {
        state[name] = value;
      });
    },
  },
});

export const selectChosenRoute = state => state.chosenRoute;
export const { clearChosenRoute, initChosenRoute } = chosenRouteSlice.actions;
export default chosenRouteSlice.reducer;
