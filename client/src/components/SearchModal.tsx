import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface IProps {
  classNames?: string
}

const SearchModal:React.FC<IProps> = ({ classNames }) => {
  const styles = `${classNames} relative`;
  const suggestions = false
  
  return (
    <div className={styles}>
      <div className='mb-4'>
        <label className='relative'>
          <input 
            placeholder="Search"
            name='search' 
            className='w-full rounded-full py-2 px-4 text-[14px] outline-none focus:ring focus:ring-[#291507] placeholder:text-[#291507] placeholder:font-medium text-[#291507] border border-[#291507] font-[18px]'
          />

          <span className='absolute right-2 top-0 px-2 flex items-center'>
            <AiOutlineSearch className='w-[20px] h-[20px] text-[#291507]' />
          </span>
        </label>
      </div>

      {/* Suggestions */}
      {suggestions && (
        <div className='absolute top-[50px] w-full h-auto max-h-24 flex flex-col overflow-y-scroll bg-white text-black'>
          <Link 
            to='/' 
            className='h-[60px] pl-4 w-full flex items-center rounded-xl hover:bg-[#9797971a] active:bg-[#9797971a] focus:bg-[#9797971a] text-[16px] font-medium'
          >
            American Bobtail
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchModal