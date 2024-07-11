import reducer from "./slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: reducer
})