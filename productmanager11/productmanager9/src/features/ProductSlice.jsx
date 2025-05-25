import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const API = 'http://localhost:3000/products';

export const featchProducts = createAsyncThunk('products/fetch',async()=>{
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    return data;
})

const ProductSlice = createSlice({
    name:'products',
    initialState:{products:[],loading:false,error:null},
    extraReducers:(build)=>{
        build.addCase(featchProducts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(featchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(featchProducts.rejected,(state,action)=>{
            state.loading = false;4
            state.error = action.error.message;
        })
    }
})

export default ProductSlice.reducer;