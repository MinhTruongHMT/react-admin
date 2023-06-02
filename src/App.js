
//import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './conteners/Home';
import  User  from 'conteners/User';
import 'antd/dist/reset.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
    </Routes>
  );
}
export default App;
