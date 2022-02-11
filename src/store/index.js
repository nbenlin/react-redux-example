import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import uiReducer from "./ui.slice";
import tableReducer from "./table.slice";

const store = configureStore({
  reducer: { auth: authReducer, ui: uiReducer, table: tableReducer },
});
export default store;
