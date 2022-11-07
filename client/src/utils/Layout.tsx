import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.comp'
import Footer from '../components/Footer.comp'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout