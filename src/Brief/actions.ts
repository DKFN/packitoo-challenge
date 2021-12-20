import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {IBrief, IBriefBase} from "./models";

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

