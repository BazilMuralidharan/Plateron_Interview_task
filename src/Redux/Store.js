import { configureStore } from "@reduxjs/toolkit";
import CreateUserReducer from "./CreateUserReducer/CreateUserReducer";

const Store = configureStore({
  reducer: {
    userMetaData: CreateUserReducer
  },
  devTools: true
});

export default Store;
