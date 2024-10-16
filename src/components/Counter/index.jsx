import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCounterValue } from '../../slices/counterSlice';

export default function Counter() {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <a className="app-title" href="https://redux-toolkit.js.org/tutorials/quick-start">Redux toolkit</a>
        <div className="counter-wrapper">
        <button
          className="button-shiny"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <strong className="counter-value">{count}</strong>
        <button
          className="button-shiny"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}