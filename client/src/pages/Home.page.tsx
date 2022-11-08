import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import SearchModal from '../components/SearchModal'
import HeroImagesm from '../images/HeroImagesm.png'
// import HeroImagemd from '../images/HeroImagemd.png'
// import HeroImagelg from '../images/HeroImagelg.png'

const Home = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  
  return (
    <div className='h-[200vh]'>
      {/* HERO BANNER */}
      <div 
        style={{ backgroundImage: `url(${HeroImagesm})` }}
        className="bg-center bg-cover bg-no-repeat h-[160px] rounded-t-3xl relative text-white flex flex-col justify-center md:h-[300px] pl-5 md:pl-[60px]"
      >
        <div className='mb-4 w-full mx-auto'>
          <h1 className="font-mystery text-[18px] mb-2 md:text-[40px]">CatWiki</h1>
          <p className='text-[11px] leading-tight md:text-[14px]'>Get to know more about your <br /> cat breed</p>
        </div>

        <div className='w-full mx-auto md:hidden'>
          <label 
            className='relative' 
            onClick={() => setShowSearchModal(true)}
          >
            <input 
              placeholder="Search" 
              type='text'
              name='search' 
              className='w-2/5 rounded-full py-1 px-2 text-[14px] outline-none focus:ring focus:ring-[#291507] placeholder:text-[#291507] placeholder:font-medium text-[#291507]'
            />
            <span className='absolute right-2 top-0 flex items-center'>
              <AiOutlineSearch className=' w-[20px] h-[20px] text-[#291507]' />
            </span>
          </label>
        </div>

        <SearchModal 
          classNames={'md:w-1/3'}
        />
      </div>

      {/* SEARCH MODAL */}
      {showSearchModal &&
        <div className='absolute top-0 left-0 bg-white w-full h-2/3 p-4 rounded-lg shadow-xl md:hidden'>
          <div 
            className='flex justify-end mb-4'
            onClick={() => setShowSearchModal(false)}
          >
            <IoMdClose className='w-[40px] h-[40px] bg-[#9797971a] hover:bg-[#9797974d] p-2 rounded-lg' />
          </div>

          <SearchModal />
        </div> 
      }

      {/* MOST SEARCHED BREEDS */}
    </div>
  )
}

export default Home