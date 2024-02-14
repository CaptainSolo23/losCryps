//import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <footer className='footer mt-2 pt-2 text-light d-flex flex-column align-items-center'>
      <div className='text-center'>
        <p className='mb-2'>Terms of Use | Privacy Notice</p>
        <p className='mb-2'>2024, Los Cryps</p>
        <p className='text-light'>
          Website developed by:_
          <a
            className='developed-link'
            target='_blank'
            href='https://github.com/CaptainSolo23'
            rel='noreferrer'
          >Cesar Ivan Arellano Juarez
          </a>
        </p>
      </div>
    </footer>

    </>
  )
}

export default Footer