import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='mt-5 mx-4 sm:mx-10'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout