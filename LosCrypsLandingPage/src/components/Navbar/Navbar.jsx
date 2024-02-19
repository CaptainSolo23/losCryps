import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <header className='NavBar d-flex flex-wrap align-items-center py-2'>

      <NavLink to='/' className='__logo-text'>
        <img src='..\src\assets\img\LosCrypsLogo.svg' alt='__logo' className='__logo'></img>
      </NavLink>

      <ul className='nav justify-content-center'>
        
        {/*<li className='nav-item mx-2'><NavLink to='/' className='__nav-link active' aria-current='page'>Home</NavLink></li>*/}
        <li className='nav-item mx-2'><NavLink to='/nosotros' className='__nav-link'>Quienes Somos</NavLink></li>
        <li className='nav-item mx-2'><NavLink to='/presentaciones' className='__nav-link'>Presentaciones</NavLink></li>
        <li className='nav-item mx-2'><NavLink to='/contacto' className='__nav-link'>Contacto</NavLink></li>
        <li className='nav-item mx-2'><NavLink to='/reservaciones' className='__nav-link'>Reserva ya!</NavLink></li>
        
      </ul>
      
    </header>
    
    </>
  )
}

export default Navbar