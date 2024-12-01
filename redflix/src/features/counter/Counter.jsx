import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount,decrementByAmount, divideByNumber, roundNumber } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>decrement by 5</button>
      <button onClick={() => dispatch(divideByNumber(5))}>divide by 5</button>
      <button onClick={() => dispatch(roundNumber())}>round number</button>
      <button>round up the number</button>
    </div>
  );
};

export default Counter;
