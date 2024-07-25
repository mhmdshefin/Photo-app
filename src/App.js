import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Search from './component/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './component/Data';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/data" element={<Data/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
