import {Link} from 'react-router-dom';
import {PiBookOpenTextLight } from 'react-icons/pi';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {BiUserCircle} from 'react-icons/bi';
import {IBookItemProps} from '../../types/BookTypes';
import {MdOutlineDelete} from 'react-icons/md';
import {useState} from 'react';
import BookModal from './BookModal';
import { BiShow } from 'react-icons/bi';

const BooksSCard = ( {item} : IBookItemProps ) => {
    const [showModal, setShowModal] = useState(false);

  return (
    <div 
    className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
    >
      <h2 className='absolute top-1 right-2 px-4 bg-red-300 rounded-ls'>{item.publishYear}</h2>
      <h4 className='my-2 text-gray-500'>{item._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl'/>
        <h4 className='my-4'>{item.title}</h4>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl'/>
        <h4 className='my-1'>{item.author}</h4>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow className='text-3xl text-blue-800 hower:text-black'
        onClick={()=>setShowModal(true)} />

      <Link to={`/books/details/${item._id}`}>
        <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
      </Link>
      <Link to={`/books/edit/${item._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
      </Link>
      <Link to={`/books/delete/${item._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
      </Link>
      </div>
      {
        showModal && ( <BookModal item = {item} onClose={()=>setShowModal(false)}/> )
      }
    </div>
  )
}

export default BooksSCard
