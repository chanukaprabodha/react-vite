import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {ProductData} from "../modal/ProductData.ts";

interface ProductState {
    list: ProductData[],
    error: string | null | undefined
}

const initialState: ProductState = {
    list: [],
    error: null
}

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async () => {
        const responsePromise = await fetch('./product-data.json');
        return await responsePromise.json();
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, () => {
            alert('Products are still loading...')
        }).addCase(getAllProducts.fulfilled, (state: ProductState, action) => {
            state.list = action.payload;
        }).addCase(getAllProducts.rejected, (state: ProductState, action) => {
            state.error = (action.payload as Error)?.message || 'Failed to fetch products';
            alert(`Error fetching products: ${state.error}`);
        })
    }
});

export default productSlice.reducer;