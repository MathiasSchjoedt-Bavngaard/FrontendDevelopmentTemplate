import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Jobs from './Pages/Jobs';
import ManageEmployes from './Pages/ManageEmployes';
import MenuBar from './Components/MenuBar';


//added Navbar to the app
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <MenuBar/>

      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/Login' element={<Login />}></Route>
        <Route exact path='/Jobs' element={<Jobs />}></Route>
        <Route exact path='/ManageEmployes' element={<ManageEmployes />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}


