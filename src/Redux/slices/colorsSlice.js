import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updatePhaseColor = createAsyncThunk(
  "color/updatePhase",
  async ({ color }, { rejectWithValue }) => {
    try {
    } catch (err) {
      console.log(err.message);
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

const initialState = {
  phaseColor: "gray",
  loading: false,
  error: null,
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      state.userName = "";
    },
  },
  extraReducers: {
    [getUserToken.pending]: (state) => {
      state.loading = true;
    },

    [getUserToken.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [getUserToken.fulfilled]: (state, action) => {
      state.authenticated = true;
      state.loading = false;
      state.userName = action.payload;
      console.log("this is log ", action.payload.user);
    },
  },
});

export const { authUser, logout } = authSlice.actions;

export default authSlice.reducer;
