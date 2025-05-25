import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";    
const API = 'https://683076bcf504aa3c70f807c0.mockapi.io/events';

export const fetchEvent = createAsyncThunk('events/fetch',async()=>{
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    return data;
})

const EventSlice = createSlice({
    name:'events',
    initialState:{events:[],loading:false,error:null},
    extraReducers:(build)=>{
        build.addCase(fetchEvent.pending,(state)=>{
            state.loading = true;

        })
        .addCase(fetchEvent.fulfilled,(state,action)=>{
            state.loading = false;
            state.events = action.payload;
        })
        .addCase(fetchEvent.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default EventSlice.reducer;