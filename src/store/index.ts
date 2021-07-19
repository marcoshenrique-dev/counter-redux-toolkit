import {configureStore} from "@reduxjs/toolkit";
import counter from "./stock.store";

const store =  configureStore({
  reducer: {
    stock: counter,
  }
})

export type rootState = ReturnType<typeof store.getState>;
export default store;