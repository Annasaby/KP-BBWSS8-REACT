import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Berita from './pages/Berita'
import Galeri from './pages/Galeri'
import Home from './pages/Home'
import Layanan from './pages/Layanan'
import Profil from './pages/Profil'
import NoPage from './pages/NoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/berita' element={<Berita />}/>
        <Route path='/galeri' element={<Galeri />}/>
        <Route path='/layanan' element={<Layanan />}/>
        <Route path='/profil' element={<Profil />}/>
        <Route path='/*' element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App