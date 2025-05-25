import { configureStore } from "@reduxjs/toolkit";
import EventReducer from './features/EventsSlice';

export const store = configureStore({
    reducer:{
        events:EventReducer
    }
})