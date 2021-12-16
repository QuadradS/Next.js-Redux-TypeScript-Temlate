import { createReducer } from '@reduxjs/toolkit'
import {decrement, increment} from "./actions";

export interface IMainStore {
    count: number
}

const initialState = {
    count: 0
}

export default createReducer(initialState, (builder) => {
    builder.addCase(increment, (state, action) => ({
        ...state,
        count: state.count + action.payload
    }))
    builder.addCase(decrement, (state, action) => ({
        ...state,
        count: state.count - action.payload
    }))
})