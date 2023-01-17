import { configureStore, createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({

})

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export const storeActions= storeSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
  reducer: storeSlice.reducer,
});

