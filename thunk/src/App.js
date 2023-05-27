import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ActionTypes from './app/constants/actionTypes';
import { setLoading, getUsers, getPosts } from './app/actions/chatActions';

function App() {
  const storeData = useSelector((store) => store.chatReducer);
  console.log(storeData);

  const dispatch = useDispatch();
  // bileşen ekran abasıldığında verileri çek
  useEffect(() => {
    // storedaki loading değerini true yapar
    dispatch(setLoading());

    // kullanıcı verisini çekme isteği
    dispatch(getUsers());

    // post verisini çekme
    dispatch(getPosts());
  }, []);

  return (
    <div className="App">
      <h1>THUNK</h1>
      <h1>Kullanıcılar</h1>
      {storeData.users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <h1>Postlar</h1>
      {storeData.posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}

export default App;
