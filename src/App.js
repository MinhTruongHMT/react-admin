
//import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './conteners/Home';
import 'antd/dist/reset.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
export default App;
