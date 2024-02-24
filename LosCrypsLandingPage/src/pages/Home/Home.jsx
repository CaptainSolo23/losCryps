import './Home.scss'

const Home = () => {
  return (
    <>    
      
      <div className='container d-flex flex-column row-md-8 justify-content-center vh-100'>
    
        <h1 className='title-container my-2'>Los Cryps Rock & Roll Band!</h1>

        <section className='header my-2'>
          <h2 className='greeting'>Bienvenido al sitio oficial de la mejor banda de Rock & Roll en Mazatlan</h2>
        </section>

    <div className='video-intro d-flex justify-content-center w-100 my-3'>

      <iframe
        className='video-player'
        src="https://www.youtube-nocookie.com/embed/oIlcIZSkttk?si=Sae9GZ1uBG952mLM"
        title="YouTube" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ width: '100%', height: '80vh' }} 
        allowFullScreen></iframe>

    </div>

      </div>

    </>
  )
}

export default Home

