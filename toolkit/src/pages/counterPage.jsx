import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increase,
  decrease,
  setCount,
} from '../app/counterSlice';
import { Stack, Button } from 'react-bootstrap';

const CounterPage = () => {
  const state = useSelector(
    (store) => store.counterReducer
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{state.counter}</h1>
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="success"
          onClick={() => dispatch(increase())}
        >
          Arttır
        </Button>
        <Button
          variant="danger"
          onClick={() => dispatch(decrease())}
        >
          Azalt
        </Button>
        <Button
          variant="secondary"
          onClick={() => dispatch(setCount(100))}
        >
          Sıfırla
        </Button>
      </Stack>
    </div>
  );
};

{
  type: 'counterSlice/setCount';
  payload: 0;
}

export default CounterPage;
