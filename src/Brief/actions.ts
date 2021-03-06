import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {IBrief, IBriefBase} from "./models";


export const setBriefs = createAction<IBrief[]>("briefs/setBriefs");
export const appendBrief = createAction<IBrief>("briefs/appendBrief");
export const createBrief = createAsyncThunk(
    'briefs/createBrief', async (values: IBriefBase, thunkApi) => {
        const data = await fetch(
            "http://localhost:3001/briefs",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }
            ).then((res) => res.json());
        thunkApi.dispatch(appendBrief(data));
    }
)

export const fetchBriefs = createAsyncThunk(
    'briefs/fetchBriefs', (_, thunkApi) => {
        return fetch("http://localhost:3001/briefs")
            .then((res) => res.json()
                .then((b) => thunkApi.dispatch(setBriefs(b)))
            );
    }
);