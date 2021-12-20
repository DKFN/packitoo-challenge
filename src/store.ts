import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {productReducer} from "./Products/reducer";
import {IProduct} from "./Products/models";
import {IBrief} from "./Brief/models";
import {briefReducer} from "./Brief/reducer";

export interface IAppState {
    product: {
        products: IProduct[]
    },
    brief: {
        briefs: IBrief[]
    }
}

export const store = configureStore({
    reducer: {
        product: productReducer,
        brief: briefReducer
    }
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
