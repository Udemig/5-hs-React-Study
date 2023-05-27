import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

//! aksiyonları tanımladığımnız dosya

//  1 - obje olmarı
// type ve payload değerleri olması
// return : fonsiyonun çağrıdlığı yere gönderdiği cevap

// senkron aksiyon > anında gerçekleşir
// çağrıdlığı yere aksiyon döndürür
export const setLoading = () => ({
  type: ActionTypes.SET_LOADING,
  payload: true,
});

// asenkron aksiyon > gerçekleşmesi zaman alır
// middleware > bir aksiyon çalıştırmadan hemen önce veya sonra işlemler yapmaya yarar
// THUNK middleware > redux ta genelde aksiyon dispatch etmeden önce
// asenkron işlemler yapmaya yarar

// Thunk ile asenkron aksiyon yazım stili
export const getUsers = () => {
  return async function (dispatch) {
    // asenkron bütün işlemler yapılabilir
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: ActionTypes.SET_USERS,
      payload: res.data,
    });
  };
};

// ! Thunk ile aksiyon oluştururken izlenmesi gereken adımlar:
// ? Normal Bir fonskiyon oluşturma
// ? Oluşturduğumuz fonksiyona bir return satırı eklenicek
// ? Return satırına bir fonksiyon tanımlanıcak (genelde async)
// ? Tanımlanan bu fonksiyon dispatch methodunu parametre olarak alıcak
// ? gerekli işlemleri yaptıktan sonra dispatch ile aksiyonu çalışltırıcak

// Thunk en kısa yazım stili
export const getPosts = () => async (dispatch) => {
  // asenkron bir işlem gerçekleştirdik
  const response = await axios('https://jsonplaceholder.typicode.com/posts');
  // işlem gerçekleştikten sonra veriyi aksiyon yardımyıla reducere gönderme
  dispatch({
    type: ActionTypes.SET_POSTS,
    payload: response.data,
  });
};
