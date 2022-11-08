import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

interface IProps {
  placeholder: string,
}

const Input: React.FC<IProps> = ({ placeholder }) => {
  return (
    <label className='mt-3 w-[120px] relative'>
      <input 
        type='text' 
        placeholder={placeholder} 
        className='w-full p-2 rounded-full text-[12px] text-[#291507] placeholder-[#291507] font-semibold outline-none focus:ring focus:ring-[#291507]' 
      />
      <HiOutlineSearch className='absolute top-2 right-2 text-[#291507]' />
    </label>
  )
}

export default Input