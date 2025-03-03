import { configureStore } from "@reduxjs/toolkit";
import { whetherReducer } from "./reducer";


const store = configureStore({
    reducer: {

        whether: whetherReducer

    }
});

export default store;