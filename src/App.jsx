import { useState } from 'react'
import { Navigate, Route, Routes, BrowserRouter, Link, useParams } from 'react-router-dom'
import Menu from './pages/Menu'
import UpdateMenu from './pages/UpdateMenu'
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/menu" replace={true} />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/update-menu/:menuId' element={<UpdateMenu />} />
          {/* <Route path='/menu-detail/:menuId' element={<MenuDetail />} />
        <Route path='/inputmenu' element={<InputMenu />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
