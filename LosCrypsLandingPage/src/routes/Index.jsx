import { Routes, Route } from 'react-router-dom'
import  { Home, Nosotros, Presentaciones, Contacto, Reserva } from '../pages'

const Index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/presentaciones' element={<Presentaciones />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/reservaciones' element={<Reserva />} />

    </Routes>
  )
}

export default Index