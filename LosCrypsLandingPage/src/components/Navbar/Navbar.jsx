import './Navbar.scss'

const Navbar = () => {
  return (
    <>
    
    <header className='Navbar d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
      <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
        <svg className='bi me-2' width='40' height='32'><use xlinkHref='#bootstrap'></use></svg>
        <span className='__headName fs-4'>Los Cryps</span>
      </a>

      <ul className='nav d-flex flex-wrap nav-pills align-items-center'>
        
        <li className='nav-item mx-2'><a to='/' className='__nav-link active' aria-current='page'>Home</a></li>
        <li className='nav-item mx-2'><a to='#' className='__nav-link'>Quienes Somos</a></li>
        <li className='nav-item mx-2'><a to='#' className='__nav-link'>Presentaciones</a></li>
        <li className='nav-item mx-2'><a to='#' className='__nav-link'>Contacto</a></li>
        <li className='nav-item mx-2'><a to='#' className='__nav-link'>Reserva ya!</a></li>
        
      </ul>
      
    </header>
    
    </>
  )
}

export default Navbar