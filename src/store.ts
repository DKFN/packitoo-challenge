import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {briefReducer} from "./Brief/briefReducer";

export interface IAppState {
    brief: {
        briefs: [],
    }
}

export const store = configureStore({
    reducer: {
        brief: briefReducer
    }
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
