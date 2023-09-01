import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navbarItemSlice from "./service/navbarItemSlice";

const reducer = combineReducers({
  navbarItem: navbarItemSlice,
});

export const store = configureStore({
  reducer,
});
