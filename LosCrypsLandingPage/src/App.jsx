import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import Index from './routes/Index'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Index />
      <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
