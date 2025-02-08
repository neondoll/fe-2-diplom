import { createSlice } from "@reduxjs/toolkit";

const initialState = { final_price: 0, first_name: "", number: "285АА", patronymic: "" };

const successfulOrderInfoSlice = createSlice({
  name: "successfulOrderInfo",
  initialState,
  reducers: {
    initSuccessfulOrderInfo: (state, action) => {
      Object.entries(action.payload).forEach(([name, value]) => {
        state[name] = value;
      });
    },
  },
});

export const selectSuccessfulOrderInfo = state => state.successfulOrderInfo;
export const { initSuccessfulOrderInfo } = successfulOrderInfoSlice.actions;
export default successfulOrderInfoSlice.reducer;
