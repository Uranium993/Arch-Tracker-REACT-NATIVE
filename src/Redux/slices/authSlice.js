import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { api, parseJwt, setAuthToken } from "../utility";
import { auth } from "../../../firebase";

export const getUserToken = createAsyncThunk(
  "user/validateUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      user.user.sendEmailVerification({
        url: "http://localhost:19006/",
      });
      const token = await user.user.getIdToken();
      return token;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

const initialState = {
  authenticated: false,
  pendingAuth: false,
  loading: false,
  error: null,
  testToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      state.userName = "";
    },
    addToken: (state, action) => {
      state.testToken = action.payload;
    },
    verificationPending: (state, action) => {
      state.pendingAuth = action.payload;
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
    },
  },
});

export const { authUser, logout, addToken, verificationPending } =
  authSlice.actions;

export default authSlice.reducer;
