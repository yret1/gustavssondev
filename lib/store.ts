import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: true
    });
}


export type AppStore = ReturnType<typeof makeStore>