import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {IProduct} from "./models";

export const setProductData = createAction<IProduct[]>("products/setProducts");

export const fetchProductctData = createAsyncThunk('' +
    'products/fetchProductctData',
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
