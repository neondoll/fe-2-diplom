import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date_end: undefined,
  date_end_arrival: undefined,
  date_start: undefined,
  date_start_arrival: undefined,
  end_arrival_hour_from: 0,
  end_arrival_hour_to: 24,
  end_departure_hour_from: 0,
  end_departure_hour_to: 24,
  from_city: undefined,
  have_air_conditioning: false,
  have_express: false,
  have_first_class: false,
  have_fourth_class: false,
  have_second_class: false,
  have_third_class: false,
  have_wifi: false,
  price_from: 0,
  price_to: 9999,
  start_arrival_hour_from: 0,
  start_arrival_hour_to: 24,
  start_departure_hour_from: 0,
  start_departure_hour_to: 24,
  to_city: undefined,
};

const routesSearchSlice = createSlice({
  name: "routesSearchForm",
  initialState,
  reducers: {
    changeRoutesSearchInput: (state, action) => {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const selectRoutesSearch = state => state.routesSearch;
export const { changeRoutesSearchInput } = routesSearchSlice.actions;
export default routesSearchSlice.reducer;
