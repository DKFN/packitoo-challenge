import {createReducer} from "@reduxjs/toolkit";
import {appendBrief} from "./actions";
import {IBrief} from "./models";

const initialState = {
    briefs: ([] as IBrief[])
};

export const briefReducer = createReducer(initialState, {
    [appendBrief.type]: (state, action) => {
        state.briefs.push(action.payload)
    }
});
