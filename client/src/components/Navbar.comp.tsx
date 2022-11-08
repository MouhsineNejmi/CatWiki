import { Link } from 'react-router-dom';
import { ReactComponent as CatwikiLogo } from '../images/CatwikiLogo.svg';

const Navbar = () => {
  return (
    <div className='mb-4'>
      <Link to='/'>
        <CatwikiLogo />
      </Link>
    </div>
  )
}

export default Navbar