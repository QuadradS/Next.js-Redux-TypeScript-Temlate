import {createAction} from "@reduxjs/toolkit";


export const decrement = createAction<number>('DECREMENT')
export const increment = createAction<number>('INCREMENT')