import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CounterState {
    counter: number;
    isLoading: boolean;
    error: string;
}

const initialState: CounterState = {
    counter: 0,
    isLoading: false,
    error: ''
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state : CounterState){
            state.counter = state.counter + 1
        },
        decrement(state : CounterState){
            state.counter = state.counter - 1
        }
    },
    extraReducers: {
        // [increment]: (state : CounterState) => {
        //     state.counter = state.counter + 1
        // },
        // [decrement]: (state : CounterState) => {
        //     state.counter = state.counter - 1
        //
        // }
    }
});

export const counterReducer = counterSlice.reducer;
