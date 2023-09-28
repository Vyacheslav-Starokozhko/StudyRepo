import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {counterReducer, counterSlice, decrement, increment} from "../store/reducers/CounterSlice";

const Home = () => {
    const counter = useAppSelector((state) => state.counterReducer.counter);
    const dispatch = useAppDispatch();
    return (
        <div>
          <h1>Home</h1>
            <h2>{counter}</h2>
            <button onClick={()=> dispatch(counterSlice.actions.increment())}>Increment</button>
            <button onClick={()=> dispatch(counterSlice.actions.decrement())}>decrement</button>
        </div>
    );
};

export default Home;
