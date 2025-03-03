import { createReducer } from "@reduxjs/toolkit";



export const whetherReducer = createReducer({ loading: true }, {

    getWhetherRequest: (state) => {
        state.loading = true;
    },
    getWhetherSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
    },
    getWhetherFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError: (state) => {
        state.error = null;
    },

});