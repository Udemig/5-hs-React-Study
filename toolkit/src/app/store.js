import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    // burada reducerları tanımlayıcaz
    counterReducer,
  },
});

// 1 - configure store parametre olarak bir obje
// 2 -   ve içerisine reducer objesi tanımla
