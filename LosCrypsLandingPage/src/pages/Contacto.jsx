

const Contacto = () => {
  return (
    <>
    
    <div className='container d-flex flex-column col-md-8 text-center'>
      
      <div className='title-container '>
    
        <h1 className='Title my-3'>Queremos saber de ti</h1>

      </div>

    <section className='header text-center'>
      <h2 className='greeting'>Conoce nuestros medios de contacto</h2>
    </section>

    <div className="contact-cont d-flex flex-column flex-md-row my-4">
      <div className="formulario col-4"> 
      
      <h3>Contactanos</h3>

      <form className='d-flex flex-column'>

        <label className="label">
          Nombre 
        </label>
        <input className='inputField my-3' type='text' name='name' placeholder='Introduce tu nombre' />

        <label>
          Email 
        </label>
        <input className='inputField my-3' type='text' name='mail' placeholder='Introduce tu mail' />

        <label>
          Presupuesto 
          
        </label>
        <input className='inputField my-3' type='text' name='budget' placeholder='Tu presupuesto' />
        <label>
          Mensaje 
         
        </label>
        <textarea className='inputField my-3' rows={4} placeholder='Dejanos tu mensaje' />
        
        
      </form>
      
      </div>

  {/*redes container*/}

      <div className="links col-4">
        <h3>Conoce nuestras redes sociales</h3>
  
  <div className="social-network d-flex flex-column">

    <div className="row my-3">
      <div className="col-md-4">
        <a  href="https://www.facebook.com/" target='_blank' rel='noopener no referrer'>
          <img src=".\src\assets\img\fbLogo.svg" alt="Facebook" className="img-fluid" />
        </a>
        
      </div>
      <div className="col-md-4">
      <a href="https://www.instagram.com/" target='_blank' rel='noopener no referrer'>
        <img src=".\src\assets\img\Instagram_logo_2016.svg.png" alt="Instagram" className="img-fluid" />
      </a>
        
      </div>
      <div className="col-md-4">
      <a href="https://web.whatsapp.com/" target='_blank' rel='noopener no referrer'>
        <img src=".\src\assets\img\WhatsApp.svg.webp" alt="WhatsApp" className="img-fluid" />
      </a>
        
      </div>
    </div>
    <div className="row">
    
      <div className="col-md-12 my-3">
      <a href="https://www.youtube.com/" target='_blank' rel='noopener nohttps://www.youtube.com/ referrer'>
        <img src=".\src\assets\img\Logo_of_YouTube_(2015-2017).svg.png" alt="YouTube" className="img-fluid" />
      </a>

      </div>
    </div>
  </div>
</div>


      </div>
    </div>
    </>
  )
}

export default Contacto


