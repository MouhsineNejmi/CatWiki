// import { useState } from 'react'

import HeroImagesm from '../../images/HeroImagesm.png'
import HeroImagemd from '../../images/HeroImagemd.png'
import HeroImagelg from '../../images/HeroImagelg.png'
import Input from '../../components/Input'
import useWindowSize from '../../hooks/useWindowSize'

const Home = () => {
  const windowSize = useWindowSize();

  return (
    <section className='h-[170px] md:h-[300px] text-white relative overflow-hidden rounded-t-[50px]'>
      {/* HERO BANNER */}
      <div className='h-full'>
        <img 
          src={HeroImagesm}
          srcSet={`
            ${HeroImagesm} 375w, 
            ${HeroImagemd} 768w,
            ${HeroImagelg} 1280w`
          }
          className='absolute'
        />
      </div>

      <div className='absolute top-5 flex flex-col justify-center z-50 p-5'>
        <h1 className="font-mystery text-[18px] mb-2 md:text-[40px]">CatWiki</h1>
        <p className='text-[11px] leading-tight md:text-[14px]'>
          Get to know more about your <br /> cat breed
        </p>
        <Input 
          placeholder={windowSize?.width! < 768 ? 'Search' : 'Enter your breed' }
        />
      </div>
    </section>
  )
}

export default Home