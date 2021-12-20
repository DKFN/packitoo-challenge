import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {IProduct} from "./models";

export const setProductData = createAction<IProduct[]>("briefs/setProducts");

export const fetchProductctData = createAsyncThunk('' +
    'briefs/fetchProductctData',
    async (_, thunkApi) => {
            const data = await fetch("http://localhost:3001/products", {
                method: "GET"
            })
                .then((res) => res.json())
                .catch(() => {
                // TODO: Report error
                return [];
            })
            return thunkApi.dispatch(setProductData(data));
        }
    );
