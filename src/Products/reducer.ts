import {createReducer} from "@reduxjs/toolkit";
import {setProductData} from "./actions";

const initialState = {
    products: []
};

export const productReducer = createReducer(initialState, {
    // It might seem statefull but it uses immerJS under the hood so its stateless
    [setProductData.type]: (state, action) => {
        state.products = action.payload;
    }
});
