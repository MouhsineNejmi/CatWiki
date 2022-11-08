import { Link } from 'react-router-dom'
import { AiOutlineCopyright } from 'react-icons/ai'
import { ReactComponent as CatwikiLogo } from '../../images/CatwikiLogo-White.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='w-full h-[100px] sm:h-[70px] flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center px-5 bg-black text-white rounded-t-[25px]'>
      <>
        <Link to='/'>
          <CatwikiLogo className='w-[60px] sm:w-[80px] fill-white' />
        </Link>
      </>

      <div className='text-[10px] font-light flex items-center sm:tracking-widset'>
        <AiOutlineCopyright className='mr-1 w-[20px] h-[29px]' />
        <p>created by <span className='underline font-bold'>Mouhsine NEJMI</span> - devChallenge.io {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer