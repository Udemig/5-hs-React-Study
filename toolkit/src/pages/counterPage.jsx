import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setCount } from '../app/counterSlice';

const CounterPage = () => {
  const state = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch(increase())}>Arttır</button>
      <button onClick={() => dispatch(decrease())}>Azalt</button>
      <button onClick={() => dispatch(setCount(100))}>Sıfırla</button>
    </div>
  );
};

{
  type: 'counterSlice/setCount';
  payload: 0;
}

export default CounterPage;
