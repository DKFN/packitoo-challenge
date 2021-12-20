import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {productReducer} from "./Products/reducer";
import {IProduct} from "./Products/models";

export interface IAppState {
    product: {
        products: IProduct[],
    }
}

export const store = configureStore({
    reducer: {
        product: productReducer
    }
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
