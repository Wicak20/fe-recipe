import { useState } from 'react'
import { Navigate, Route, Routes, BrowserRouter, Link, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Menu from './pages/Menu'
import UpdateMenu from './pages/UpdateMenu'
import AddMenu from './pages/InputMenu';
import SearchMenu from './pages/SearchMenu';
import MenuById from './pages/SearchMenu/_id';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Register from './pages/Registrasi';
import DetailProfile from './pages/DetailProfil';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/landing-page" replace={true} />} />
          <Route path='/landing-page' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/update-menu/:menuId' element={<UpdateMenu />} />
          <Route path='/input-menu' element={<AddMenu />} />
          <Route path='/search-menu' element={<SearchMenu />} />
          <Route path='/detail-menu/:id' element={<MenuById />} />
          <Route path='/detail-profil/:id' element={<DetailProfile />} />
          {/* <Route path='/menu-detail/:menuId' element={<MenuDetail />} />
        <Route path='/inputmenu' element={<InputMenu />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
