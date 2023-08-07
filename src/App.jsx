import { useState } from 'react'
import { Navigate, Route, Routes, BrowserRouter, Link, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Menu from './pages/Menu'
import UpdateMenu from './pages/UpdateMenu'
import AddMenu from './pages/InputMenu';
import SearchMenu from './pages/SearchMenu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/menu" replace={true} />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/update-menu/:menuId' element={<UpdateMenu />} />
          <Route path='/input-menu' element={<AddMenu />} />
          <Route path='/search-menu' element={<SearchMenu />} />
          {/* <Route path='/menu-detail/:menuId' element={<MenuDetail />} />
        <Route path='/inputmenu' element={<InputMenu />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
