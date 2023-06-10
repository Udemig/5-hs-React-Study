import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      title: 'Navbar düzenlensin',
      author: 'Ahmet',
      assigned_to: 'Ali',
      end_date: '2023-06-19',
      id: 1,
    },
    {
      title: 'Footer animasyon',
      author: 'Mehmet',
      assigned_to: 'Veli',
      end_date: '2023-06-11',
      id: 2,
    },
  ],
};

const todoSlice = createSlice({
  name: 'crudSlice',
  initialState,
  reducers: {
    addTask: (state, action) => {
      // storeda tutulan max verilerin sayısını alma
      const maxId = state.tasks.length + 1;
      //   budluğumuz id değerini objeye ekleme
      action.payload.id = maxId;
      //   storu güncelleme(objeyi storedaki diziye ekliyoruz)
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      // silinecek elemanın sırasını bulma
      const index = state.tasks.findIndex(
        (item) => item.id == action.payload
      );
      //   diziden sırasını bildiği elmanı çıkarma
      state.tasks.splice(index, 1);
      //   işlemin gerçekleşme hızı
      console.log(window.performance.now());
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
