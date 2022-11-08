import { Link } from 'react-router-dom';
import { ReactComponent as CatwikiLogo } from '../../images/CatwikiLogo.svg';

const Navbar = () => {
  return (
    <header className='mb-4'>
      <Link to='/'>
        <CatwikiLogo />
      </Link>
    </header>
  )
}

export default Navbar