import Api from "../api";
import queryString from "query-string";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getResponseError } from "../lib/utils";

const initialState = { error: null, data: null, loading: true };

export const fetchRoutes = createAsyncThunk("routes/fetchRoutes", async (params) => {
  const paramsString = queryString.stringify(params);

  const response = await fetch(`${Api.ROUTES}?${paramsString}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
});

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoutes.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchRoutes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchRoutes.rejected, (state, action) => {
        state.error = getResponseError(action.error);
        state.loading = false;
      });
  },
});

export const selectRoutes = state => state.routes;
export const selectRoutesLoading = state => state.routes.loading;
export default routesSlice.reducer;
