import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CounterPage from './pages/counterPage';
import CrudPage from './pages/crudPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CrudPage />} />
          <Route path="/sayac" element={<CounterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
